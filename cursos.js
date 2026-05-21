const cursosData = {
    "apache-airflow":      { title: "Apache Airflow: Orquestrando seu Primeiro Pipeline de Dados",           pdf: "certificados_pdf/Apache Airflow orquestrando seu primeiro pipeline de dados.pdf" },
    "arquitetura-css":     { title: "Arquitetura CSS: Descomplicando os Problemas",                          pdf: "certificados_pdf/Arquitetura CSS descomplicando os problemas.pdf" },
    "clusterizacao":       { title: "Clusterização: Lidando com Dados sem Rótulo",                           pdf: "certificados_pdf/Clusterizacao lidando com dados sem rotulo.pdf" },
    "css-grid":            { title: "CSS Grid: Simplificando Layouts",                                       pdf: "certificados_pdf/CSS Grid simplificando layouts.pdf" },
    "ds-series-temporais": { title: "Data Science: Analisando e Prevendo Séries Temporais",                  pdf: "certificados_pdf/Data Science analisando e prevendo séries temporais.pdf" },
    "ds-explorando":       { title: "Data Science: Explorando e Analisando Dados",                           pdf: "certificados_pdf/Data Science explorando e analisando dados.pdf" },
    "ds-hipotese":         { title: "Data Science: Testando Hipóteses",                                      pdf: "certificados_pdf/Data Science testando hipótese.pdf" },
    "ds-regressao":        { title: "Data Science: Testando Relações com Regressão Linear",                  pdf: "certificados_pdf/Data Science testando relações com Regressão Linear.pdf" },
    "data-viz":            { title: "Data Visualization: Criando Gráficos com Bibliotecas Python",           pdf: "certificados_pdf/Data Visualization criando gráficos com bibliotecas Python.pdf" },
    "flexbox":             { title: "Flexbox: Posicione Elementos na Tela",                                  pdf: "certificados_pdf/Flexbox posicione elementos na tela.pdf" },
    "foco":                { title: "Foco: Trazendo Mais Resultados para o Dia a Dia",                       pdf: "certificados_pdf/Foco trazendo mais resultados para o dia a dia.pdf" },
    "git-github":          { title: "Git e Github: Controle e Compartilhe seu Código",                       pdf: "certificados_pdf/Git e Github controle e compartilhe seu código.pdf" },
    "html-css1":           { title: "HTML5 e CSS3 — Parte 1: Crie uma Página da Web",                        pdf: "certificados_pdf/HTML5 e CSS3 parte 1 crie uma página da Web.pdf" },
    "html-css2":           { title: "HTML5 e CSS3 — Parte 2: Posicionamento, Listas e Navegação",            pdf: "certificados_pdf/HTML5 e CSS3 parte 2 posicionamento, listas e navegação.pdf" },
    "html-css3":           { title: "HTML5 e CSS3 — Parte 3: Formulários e Tabelas",                         pdf: "certificados_pdf/HTML5 e CSS3 parte 3 trabalhando com formulários e tabelas.pdf" },
    "html-css4":           { title: "HTML5 e CSS3 — Parte 4: Avançando no CSS",                              pdf: "certificados_pdf/HTML5 e CSS3 parte 4 avançando no CSS.pdf" },
    "habitos":             { title: "Hábitos: Da Produtividade às Metas Pessoais",                           pdf: "certificados_pdf/Hábitos da produtividade às metas pessoais.pdf" },
    "java-collections":    { title: "Java Collections: Dominando Listas, Sets e Mapas",                      pdf: "certificados_pdf/Java Collections Dominando Listas, Sets e Mapas.pdf" },
    "java-object-string":  { title: "Java e java.lang: Programe com a Classe Object e String",               pdf: "certificados_pdf/Java e java.lang programe com a classe Object e String.pdf" },
    "java-util":           { title: "Java e java.util: Coleções, Wrappers e Lambda Expressions",             pdf: "certificados_pdf/Java e java.util Coleções, Wrappers e Lambda expressions.pdf" },
    "java-jdbc":           { title: "Java e JDBC: Trabalhando com um Banco de Dados",                        pdf: "certificados_pdf/Java e JDBC trabalhando com um banco de dados.pdf" },
    "java-excecoes":       { title: "Java Exceções: Criar, Lançar e Controlar Exceções",                     pdf: "certificados_pdf/Java Exceções aprenda a criar, lançar e controlar exceções.pdf" },
    "java-jre-jdk":        { title: "Java JRE e JDK: Compile e Execute o seu Programa",                      pdf: "certificados_pdf/Java JRE e JDK compile e execute o seu programa.pdf" },
    "java-oo":             { title: "Java OO: Entendendo a Orientação a Objetos",                            pdf: "certificados_pdf/Java OO entendendo a Orientação a Objetos.pdf" },
    "java-polimorfismo":   { title: "Java Polimorfismo: Herança e Interfaces",                               pdf: "certificados_pdf/Java Polimorfismo entenda herança e interfaces.pdf" },
    "js-logica1":          { title: "JavaScript e HTML: Lógica de Programação com Jogo",                     pdf: "certificados_pdf/JavaScript e HTML desenvolva um jogo e pratique lógica de programação.pdf" },
    "js-logica2":          { title: "JavaScript e HTML: Lógica com Animações e Jogos",                       pdf: "certificados_pdf/JavaScript e HTML pratique lógica com desenhos, animações e um jogo.pdf" },
    "js-linguagem":        { title: "JavaScript: Explorando a Linguagem",                                    pdf: "certificados_pdf/JavaScript explorando a linguagem.pdf" },
    "js-interfaces":       { title: "JavaScript: Interfaces e Herança em OO",                                pdf: "certificados_pdf/JavaScript interfaces e Herança em Orientação a Objetos.pdf" },
    "js-dom":              { title: "JavaScript na Web: Manipulação do DOM",                                  pdf: "certificados_pdf/JavaScript na Web manipule o DOM com JavaScript.pdf" },
    "js-formularios":      { title: "JavaScript na Web: Validação de Formulários e HTML5",                   pdf: "certificados_pdf/JavaScript na Web validação de Formulários e HTML5.pdf" },
    "js-poo":              { title: "JavaScript: Programando a Orientação a Objetos",                        pdf: "certificados_pdf/JavaScript programando a Orientação a Objetos.pdf" },
    "js-storage":          { title: "JS na Web: Armazenando Dados no Navegador",                             pdf: "certificados_pdf/JS na Web Armazenando dados no navegador.pdf" },
    "js-crud":             { title: "JS na Web: CRUD com JavaScript Assíncrono",                             pdf: "certificados_pdf/JS na web CRUD com JavaScript assíncrono.pdf" },
    "layouts-responsivos": { title: "Layouts Responsivos: Trabalhando com Mobile",                           pdf: "certificados_pdf/Layouts Responsivos trabalhando com layouts mobile.pdf" },
    "linkedin":            { title: "LinkedIn: Como Fazer o seu Perfil Trabalhar para Você",                 pdf: "certificados_pdf/LinkedIn Como fazer o seu perfil trabalhar para você.pdf" },
    "ml-classificacao":    { title: "Machine Learning: Classificação com SKLearn",                           pdf: "certificados_pdf/Machine Learning classificação com SKLearn.pdf" },
    "modelagem-sql":       { title: "Modelagem de Banco de Dados Relacional: Entendendo SQL",                pdf: "certificados_pdf/Modelagem de banco de dados relacional entendendo SQL.pdf" },
    "mongodb":             { title: "MongoDB: Conhecendo um Banco de Dados NoSQL",                           pdf: "certificados_pdf/MongoDB conhecendo um banco de dados NoSQL.pdf" },
    "pipeline-python-poo": { title: "Pipeline de Dados: Python + Orientação a Objeto",                      pdf: "certificados_pdf/Pipeline de dados combinando Python e orientação a objeto.pdf" },
    "pipeline-mongo-mysql":{ title: "Pipeline de Dados: Python + MongoDB + MySQL",                          pdf: "certificados_pdf/Pipeline de dados integrando Python com MongoDB e MySQL.pdf" },
    "produtividade":       { title: "Produtividade — Parte 1: Estratégias para o Dia a Dia",                 pdf: "certificados_pdf/Produtividade parte 1 estratégias para o dia a dia.pdf" },
    "python-avancado":     { title: "Python Avançado",                                                       pdf: "certificados_pdf/Python avançado.pdf" },
    "python-basico":       { title: "Python Básico",                                                         pdf: "certificados_pdf/python basico.pdf" },
    "python-requests":     { title: "Python e APIs: Conhecendo a Biblioteca Requests",                       pdf: "certificados_pdf/Python e APIs conhecendo a biblioteca Requests.pdf" },
    "python-intermediario":{ title: "Python Intermediário",                                                  pdf: "certificados_pdf/python intermediario.pdf" },
    "python-ds1":          { title: "Python para Data Science: Primeiros Passos",                            pdf: "certificados_pdf/Python para Data Science primeiros passos.pdf" },
    "python-ds2":          { title: "Python para Data Science: Funções, Estruturas e Exceções",              pdf: "certificados_pdf/Python para Data Science trabalhando com funções, estruturas de dados e exceções.pdf" },
    "sql-joins":           { title: "SQL: Joins, Views e Transações",                                        pdf: "certificados_pdf/Realizando consultas com SQL Joins, Views e transações.pdf" },
    "sql-mysql":           { title: "SQL com MySQL: Manipule e Consulte Dados",                              pdf: "certificados_pdf/SQL com MySQL manipule e consulte dados.pdf" },
    "sqlite-analise":      { title: "SQLite Online: Análise de Dados com SQL",                               pdf: "certificados_pdf/SQLite online análise de dados com SQL.pdf" },
    "sqlite-instrucoes":   { title: "SQLite Online: Instruções SQL",                                         pdf: "certificados_pdf/SQLite online conhecendo instruções SQL.pdf" },
    "sqlite-consultas":    { title: "SQLite Online: Executando Consultas SQL",                               pdf: "certificados_pdf/SQLite Online executando consultas SQL.pdf" },
};

// ── Modal ─────────────────────────────────────────────────────

function openModal(cursoId) {
    const curso = cursosData[cursoId];
    if (!curso) return;
    document.getElementById('modal-pdf-viewer').src = curso.pdf;
    document.getElementById('modal-title').textContent = curso.title;
    document.getElementById('download-link').href = curso.pdf;
    document.getElementById('download-link').download = curso.title + '.pdf';
    const modal = document.getElementById('curso-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('curso-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { document.getElementById('modal-pdf-viewer').src = ''; }, 300);
}

document.getElementById('curso-modal').addEventListener('click', function (e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});

// ── Filtros ───────────────────────────────────────────────────

let categoriaAtiva = 'todos';

function filtrarCategoria(btn) {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    categoriaAtiva = btn.dataset.cat;
    aplicarFiltros();
}

function filtrarCursos() {
    aplicarFiltros();
}

function aplicarFiltros() {
    const termo = document.getElementById('busca-input').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.curso-card');
    let visiveis = 0;

    cards.forEach(card => {
        const titulo = (card.dataset.titulo || '').toLowerCase();
        const cat = card.dataset.cat || '';

        const matchBusca = !termo || titulo.includes(termo);
        const matchCat = categoriaAtiva === 'todos' || cat === categoriaAtiva;

        const visivel = matchBusca && matchCat;
        card.style.display = visivel ? '' : 'none';
        if (visivel) visiveis++;
    });

    const total = cards.length;
    const contador = document.getElementById('contador');
    if (termo || categoriaAtiva !== 'todos') {
        contador.textContent = `${visiveis} de ${total} certificados`;
    } else {
        contador.textContent = `${total} certificados`;
    }

    const vazioPara = document.getElementById('vazio-msg');
    const termoSpan = document.getElementById('busca-termo');
    if (visiveis === 0) {
        termoSpan.textContent = termo || categoriaAtiva;
        vazioPara.style.display = 'block';
    } else {
        vazioPara.style.display = 'none';
    }
}

// Inicializa contador ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const total = document.querySelectorAll('.curso-card').length;
    document.getElementById('contador').textContent = `${total} certificados`;
});
