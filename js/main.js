const header=document.querySelector(".site-header"),menuToggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav"),themeToggle=document.querySelector(".theme-toggle");
function setHeaderState(){header.classList.toggle("scrolled",scrollY>12)}addEventListener("scroll",setHeaderState,{passive:true});setHeaderState();
menuToggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open))});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false")}));
const stored=localStorage.getItem("multlab-theme");if(stored==="dark")document.documentElement.dataset.theme="dark";
themeToggle?.addEventListener("click",()=>{const dark=document.documentElement.dataset.theme==="dark";if(dark){delete document.documentElement.dataset.theme;localStorage.setItem("multlab-theme","light")}else{document.documentElement.dataset.theme="dark";localStorage.setItem("multlab-theme","dark")}});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

const translations={
pt:{
"nav.lab":"Laboratório","nav.research":"Pesquisa","nav.team":"Equipe","nav.publications":"Publicações","nav.contact":"Contato",
"hero.lead":"O <strong>MultLab</strong> é o Laboratório Multidisciplinar para Modelagem Estatística, dedicado ao desenvolvimento de métodos estatísticos e suas aplicações em problemas científicos complexos.",
"hero.explore":"Explorar pesquisa","hero.team":"Conhecer a equipe","hero.ufpe":"Universidade Federal de Pernambuco","hero.ccen":"Centro de Ciências Exatas e da Natureza","hero.authorized":"laboratório autorizado pela UFPE",
"section.lab":"O laboratório","lab.heading":"dados do mundo real.","lab.lead":"O MultLab integra o Departamento de Estatística do Centro de Ciências Exatas e da Natureza da Universidade Federal de Pernambuco.",
"lab.p1":"O laboratório foi autorizado a funcionar pela UFPE em 2023 como Laboratório Multidisciplinar para Modelagem Estatística, vinculado ao CCEN. Sua atuação conecta desenvolvimento metodológico, computação estatística e aplicações em diferentes áreas da ciência.",
"lab.p2":"As áreas apresentadas nesta página são uma síntese editorial baseada nas pesquisas, projetos e produção pública dos coordenadores e colaboradores — não uma lista normativa de linhas oficiais do laboratório.",
"lab.source":"Fonte institucional",
"stats.modeling.title":"Modelagem","stats.modeling.text":"Modelos estatísticos para representar estruturas complexas e relações nos dados.",
"stats.inference.title":"Inferência","stats.inference.text":"Abordagens frequentistas e Bayesianas para estimação, diagnóstico e previsão.",
"stats.applications.title":"Aplicações","stats.applications.text":"Problemas científicos em saúde, ciências sociais, nutrição, finanças e outras áreas.",
"stats.collaboration.title":"Colaboração","stats.collaboration.text":"Pesquisa com pesquisadores nacionais e internacionais e formação de estudantes.",
"section.research":"Pesquisa","research.heading":"faz perguntas aos dados.","research.intro":"Um mapa das frentes que aparecem com destaque na produção e nos projetos associados aos coordenadores.",
"research.regression.title":"Modelos de regressão","research.regression.text":"Modelos lineares e generalizados, inferência, diagnóstico e estruturas para respostas censuradas ou com distribuições não usuais.",
"research.time.title":"Séries temporais","research.time.text":"Processos discretos e contínuos, estimação, diagnóstico e previsão sob diferentes abordagens.",
"research.bayes.title":"Inferência Bayesiana","research.bayes.text":"Modelagem, estimação e previsão Bayesianas para dados complexos e processos dependentes.",
"research.econometrics.title":"Econometria & dados complexos","research.econometrics.text":"Métodos para estruturas longitudinais, dados funcionais, dados faltantes e aplicações em ciências sociais e da saúde.",
"research.applied.title":"Modelagem aplicada","research.applied.text":"Tradução de problemas científicos em modelos estatísticos interpretáveis, com atenção a incerteza e previsão.",
"research.perspective.label":"Perspectiva","research.perspective.title":"Da teoria à aplicação.","research.perspective.text":"A pesquisa combina desenvolvimento metodológico, simulação, computação estatística e aplicações em dados reais.","research.perspective.link":"Ver publicações",
"section.team":"Coordenação","team.heading":"um laboratório.","team.coordinator":"Coordenador · MultLab","team.area":"Área","team.personal":"Página pessoal ↗","team.ufpeprofile":"Perfil UFPE ↗",
"aldo.bio":"Professor Doutor do Departamento de Estatística da UFPE. Sua atuação pública destaca modelos lineares generalizados, modelos censurados e teoria da regressão.",
"francy.bio":"Professora Doutora do Departamento de Estatística da UFPE. Sua atuação pública destaca séries temporais e econometria, com trabalhos em processos discretos, estimação e previsão.",
"collab.label":"CONEXÃO INTERNACIONAL · 2026–2027","collab.text":"Aldo William Medina Garay é apresentado como coordenador brasileiro do projeto STAND-UP no âmbito dos programas CAPES-MATH-AMSUD 2026–2027.","collab.button":"Evento & detalhes ↗",
"section.publications":"Produção","pub.heading":"continua em movimento.","pub.intro":"Alguns trabalhos recentes da produção pública de Aldo William Medina Garay, selecionados para contextualizar a atuação do laboratório.","pub.more":"Ver lista completa de publicações ↗",
"section.contact":"Contato","contact.heading":"sobre pesquisa?","contact.text":"O MultLab está aberto a colaborações, projetos, orientação e discussões sobre modelagem estatística.","contact.aldo":"Coordenação · Aldo","contact.francy":"Coordenação · Francyelle","contact.institution":"Referência institucional",
"footer.note":"Conteúdo institucional compilado a partir de fontes públicas da UFPE e páginas acadêmicas. Revise as informações com os coordenadores antes da publicação definitiva."
}};
function setLanguage(lang){
 document.documentElement.lang=lang==="pt"?"pt-BR":"en";
 document.querySelectorAll("[data-lang-btn]").forEach(b=>b.classList.toggle("active",b.dataset.langBtn===lang));
 document.querySelectorAll("[data-i18n]").forEach(el=>{
   const key=el.dataset.i18n;
   if(lang==="en"){ if(el.dataset.enOriginal!==undefined) el.innerHTML=el.dataset.enOriginal; }
   else if(translations.pt[key]!==undefined){ if(el.dataset.enOriginal===undefined) el.dataset.enOriginal=el.innerHTML; el.innerHTML=translations.pt[key];}
 });
 localStorage.setItem("multlab-language",lang);
}
document.querySelectorAll("[data-lang-btn]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.langBtn)));
setLanguage(localStorage.getItem("multlab-language")||"en");
