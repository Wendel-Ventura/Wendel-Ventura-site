/* tech.js — command palette, easter eggs e micro-interações
   Compartilhado entre index.html e cursos.html               */

// ── Command Palette (Ctrl+K) ─────────────────────────────────
(function () {
    const NA_INDEX = location.pathname.endsWith('cursos.html') ? 'index.html' : '';

    const ITEMS = [
        { label: 'Início',                  hint: 'ir para',  href: NA_INDEX + '#hero' },
        { label: 'Serviços',                hint: 'ir para',  href: NA_INDEX + '#servicos' },
        { label: 'Pipeline de Dados',       hint: 'ir para',  href: NA_INDEX + '#pipeline' },
        { label: 'Cases & Projetos',        hint: 'ir para',  href: NA_INDEX + '#projetos' },
        { label: 'Quem Somos',              hint: 'ir para',  href: NA_INDEX + '#sobre' },
        { label: 'Nossa Stack',             hint: 'ir para',  href: NA_INDEX + '#stack' },
        { label: 'Trajetória Profissional', hint: 'ir para',  href: NA_INDEX + '#historico' },
        { label: 'Certificações & Cursos',  hint: 'página',   href: 'cursos.html' },
        { label: 'Monte seu Orçamento',     hint: 'ir para',  href: NA_INDEX + '#orcamento' },
        { label: 'Contato',                 hint: 'ir para',  href: NA_INDEX + '#contato' },
        { label: 'DF Finance — SaaS no ar', hint: 'produto',  href: 'https://www.dffinance.com.br/', ext: true },
        { label: 'WhatsApp',                hint: 'abrir',    href: 'https://wa.me/5511961731575?text=Ola%20tudo%20bem?%20Gostaria%20de%20fazer%20um%20orcamento%20com%20a%20Ventura%20Analytics.', ext: true },
        { label: 'LinkedIn',                hint: 'abrir',    href: 'https://www.linkedin.com/in/wendelventura', ext: true },
        { label: 'GitHub',                  hint: 'abrir',    href: 'https://github.com/Wendel-Ventura', ext: true },
        { label: 'Baixar CV',               hint: 'download', href: 'curriculo.pdf', download: true }
    ];

    const overlay = document.createElement('div');
    overlay.className = 'cmdk-overlay';
    overlay.innerHTML = `
        <div class="cmdk-box" role="dialog" aria-label="Busca rápida">
            <div class="cmdk-input-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                <input type="text" class="cmdk-input" placeholder="Pra onde vamos? (serviços, cases, whatsapp…)" aria-label="Buscar seção">
                <span class="cmdk-esc">esc</span>
            </div>
            <ul class="cmdk-list"></ul>
            <div class="cmdk-footer">
                <span><b>↑↓</b> navegar</span><span><b>↵</b> abrir</span><span><b>esc</b> fechar</span>
            </div>
        </div>`;
    document.body.appendChild(overlay);

    const inputEl = overlay.querySelector('.cmdk-input');
    const listEl = overlay.querySelector('.cmdk-list');
    let filtered = ITEMS, sel = 0;

    const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

    function render() {
        listEl.innerHTML = filtered.map((it, i) => `
            <li class="cmdk-item${i === sel ? ' sel' : ''}" data-i="${i}">
                <span class="cmdk-label">${it.label}</span>
                <span class="cmdk-hint">${it.hint}</span>
            </li>`).join('') || '<li class="cmdk-empty">nada encontrado — tenta "cases"</li>';
    }

    function open() {
        overlay.classList.add('open');
        inputEl.value = '';
        filtered = ITEMS; sel = 0;
        render();
        setTimeout(() => inputEl.focus(), 30);
    }

    function close() { overlay.classList.remove('open'); }

    function go(item) {
        if (!item) return;
        close();
        if (item.ext) { window.open(item.href, '_blank'); return; }
        if (item.download) {
            const a = document.createElement('a');
            a.href = item.href; a.download = '';
            a.click();
            return;
        }
        location.href = item.href;
    }

    inputEl.addEventListener('input', () => {
        const q = norm(inputEl.value.trim());
        filtered = q ? ITEMS.filter(it => norm(it.label).includes(q)) : ITEMS;
        sel = 0;
        render();
    });

    inputEl.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, filtered.length - 1); render(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(sel - 1, 0); render(); }
        else if (e.key === 'Enter') go(filtered[sel]);
    });

    listEl.addEventListener('click', e => {
        const li = e.target.closest('.cmdk-item');
        if (li) go(filtered[+li.dataset.i]);
    });

    overlay.addEventListener('mousedown', e => { if (e.target === overlay) close(); });

    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            overlay.classList.contains('open') ? close() : open();
        }
        if (e.key === 'Escape') close();
    });

    const chip = document.getElementById('cmdk-chip');
    if (chip) chip.addEventListener('click', open);
})();

// ── Botões magnéticos ────────────────────────────────────────
(function () {
    if (matchMedia('(pointer: coarse)').matches) return;
    document.querySelectorAll('.botao, .botao-whatsapp, .botao-linkedin, .download-btn, .sobre-cv-btn').forEach(btn => {
        const STRENGTH = 0.25, RANGE = 60;
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            btn.style.transform = `translate(${dx * STRENGTH}px, ${dy * STRENGTH}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
})();

// ── Status dos sistemas (footer) ─────────────────────────────
(function () {
    const txt = document.getElementById('status-text');
    if (!txt) return;
    const t0 = performance.now();
    fetch('https://dffinance.com.br', { mode: 'no-cors', cache: 'no-store' })
        .then(() => {
            const ms = Math.round(performance.now() - t0);
            txt.textContent = `todos os sistemas no ar · prod ${ms}ms`;
        })
        .catch(() => { /* mantém o texto padrão */ });
})();

// ── Easter egg no console ────────────────────────────────────
(function () {
    const art = [
        '',
        '  ██╗   ██╗ ███████╗ ███╗   ██╗ ████████╗ ██╗   ██╗ ██████╗   █████╗',
        '  ██║   ██║ ██╔════╝ ████╗  ██║ ╚══██╔══╝ ██║   ██║ ██╔══██╗ ██╔══██╗',
        '  ██║   ██║ █████╗   ██╔██╗ ██║    ██║    ██║   ██║ ██████╔╝ ███████║',
        '  ╚██╗ ██╔╝ ██╔══╝   ██║╚██╗██║    ██║    ██║   ██║ ██╔══██╗ ██╔══██║',
        '   ╚████╔╝  ███████╗ ██║ ╚████║    ██║    ╚██████╔╝ ██║  ██║ ██║  ██║',
        '    ╚═══╝   ╚══════╝ ╚═╝  ╚═══╝    ╚═╝     ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝',
        ''
    ].join('\n');
    console.log('%c' + art, 'color: #818cf8; font-family: monospace;');
    console.log(
        '%cAbriu o DevTools, hein? 👀 É exatamente esse tipo de curiosidade que a gente gosta.%c\n\n' +
        'Dados, ML, automação e BI — construído à mão, sem framework, vanilla JS.\n' +
        'Bora trabalhar junto? → https://wa.me/5511961731575\n',
        'color: #22d3ee; font-size: 13px; font-weight: bold;',
        'color: #94a3b8; font-size: 12px;'
    );
    console.log('%cDica: aperta Ctrl+K no site. E experimenta digitar "help" no terminal do hero ;)', 'color: #4ade80; font-size: 11px;');
})();

// ── Spotlight (página de cursos) ─────────────────────────────
document.querySelectorAll('.curso-card').forEach(card => {
    card.classList.add('spotlight');
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
});
