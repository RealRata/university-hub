const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const today = new Date();
const iso = (d) => {
  const x = new Date(d);
  return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
};

const careerCatalog = [
  { group: "Matemáticas, estadística y análisis", name: "Actuaría", short: "Matemáticas, estadística y decisiones bajo incertidumbre.", areas: ["Probabilidad y estadística", "Matemáticas financieras", "Riesgo y seguros", "Econometría y análisis de datos"], subjects: ["Cálculo", "Álgebra lineal", "Probabilidad", "Estadística", "Matemáticas financieras", "Procesos estocásticos"], skills: ["Modelar fenómenos aleatorios", "Analizar datos y riesgo", "Construir modelos financieros"], tools: ["Python o R", "Excel", "SQL", "Visualización"] },
  { group: "Matemáticas, estadística y análisis", name: "Matemáticas", short: "Estructuras, razonamiento y modelos matemáticos.", areas: ["Álgebra y análisis", "Geometría", "Matemática aplicada", "Modelación"], subjects: ["Cálculo", "Álgebra", "Análisis matemático", "Geometría", "Ecuaciones diferenciales"], skills: ["Demostración", "Abstracción", "Modelación"], tools: ["Python", "MATLAB", "LaTeX"] },
  { group: "Matemáticas, estadística y análisis", name: "Matemáticas Aplicadas", short: "Métodos matemáticos para resolver problemas científicos e industriales.", areas: ["Optimización", "Modelación", "Métodos numéricos", "Sistemas dinámicos"], subjects: ["Cálculo", "Álgebra lineal", "Optimización", "Métodos numéricos"], skills: ["Modelar sistemas", "Resolver problemas cuantitativos"], tools: ["Python", "MATLAB", "R"] },
  { group: "Matemáticas, estadística y análisis", name: "Estadística", short: "Diseño de estudios, inferencia y análisis de información.", areas: ["Inferencia", "Diseño experimental", "Series de tiempo", "Estadística computacional"], subjects: ["Probabilidad", "Inferencia", "Regresión", "Muestreo"], skills: ["Analizar incertidumbre", "Diseñar estudios", "Interpretar datos"], tools: ["R", "Python", "SQL"] },
  { group: "Matemáticas, estadística y análisis", name: "Ciencia de Datos", short: "Estadística, programación y conocimiento extraído de datos.", areas: ["Aprendizaje automático", "Ingeniería de datos", "Visualización", "Analítica"], subjects: ["Programación", "Estadística", "Bases de datos", "Aprendizaje automático"], skills: ["Limpiar datos", "Construir modelos", "Comunicar hallazgos"], tools: ["Python", "SQL", "R", "Jupyter"] },
  { group: "Matemáticas, estadística y análisis", name: "Economía", short: "Modelos cuantitativos para estudiar decisiones y sistemas económicos.", areas: ["Microeconomía", "Macroeconomía", "Econometría", "Economía financiera"], subjects: ["Cálculo", "Estadística", "Microeconomía", "Macroeconomía", "Econometría"], skills: ["Analizar mercados", "Interpretar indicadores", "Modelar escenarios"], tools: ["R", "Python", "Stata", "Excel"] },
  { group: "Matemáticas, estadística y análisis", name: "Finanzas", short: "Análisis de inversiones, mercados y decisiones financieras.", areas: ["Mercados", "Riesgo", "Valuación", "Finanzas corporativas"], subjects: ["Matemáticas financieras", "Estadística", "Contabilidad", "Economía"], skills: ["Evaluar inversiones", "Medir riesgo", "Analizar estados financieros"], tools: ["Excel", "Python", "SQL"] },
  { group: "Computación y desarrollo", name: "Ciencias de la Computación", short: "Fundamentos teóricos y prácticos para diseñar software y algoritmos.", areas: ["Algoritmos", "Inteligencia artificial", "Bases de datos", "Teoría de la computación"], subjects: ["Matemáticas discretas", "Programación", "Estructuras de datos", "Algoritmos", "Sistemas operativos"], skills: ["Diseñar algoritmos", "Razonar formalmente", "Desarrollar software"], tools: ["Python", "C++", "Git", "Linux"] },
  { group: "Computación y desarrollo", name: "Informática", short: "Aplicación de sistemas computacionales para gestionar información.", areas: ["Sistemas de información", "Bases de datos", "Desarrollo", "Infraestructura"], subjects: ["Programación", "Bases de datos", "Redes", "Ingeniería de software"], skills: ["Integrar sistemas", "Gestionar información"], tools: ["SQL", "Python", "Linux"] },
  { group: "Computación y desarrollo", name: "Ingeniería de Software", short: "Diseño, construcción, pruebas y mantenimiento de software.", areas: ["Arquitectura de software", "Calidad", "Desarrollo web", "DevOps"], subjects: ["Programación", "Algoritmos", "Bases de datos", "Pruebas de software"], skills: ["Diseñar aplicaciones", "Probar sistemas", "Trabajar en equipo"], tools: ["Git", "Java", "JavaScript", "Docker"] },
  { group: "Computación y desarrollo", name: "Sistemas Computacionales", short: "Desarrollo e integración de sistemas, aplicaciones e infraestructura.", areas: ["Software", "Redes", "Bases de datos", "Sistemas operativos"], subjects: ["Programación", "Arquitectura", "Redes", "Bases de datos"], skills: ["Integrar soluciones", "Administrar sistemas"], tools: ["Linux", "SQL", "Python", "Git"] },
  { group: "Computación y desarrollo", name: "Inteligencia Artificial", short: "Métodos computacionales para sistemas que aprenden y razonan.", areas: ["Aprendizaje automático", "Procesamiento de lenguaje", "Visión", "Robótica inteligente"], subjects: ["Álgebra lineal", "Probabilidad", "Algoritmos", "Aprendizaje automático"], skills: ["Entrenar modelos", "Evaluar sistemas", "Trabajar con datos"], tools: ["Python", "PyTorch", "TensorFlow"] },
  { group: "Computación y desarrollo", name: "Ciberseguridad", short: "Protección de sistemas, redes, aplicaciones y datos.", areas: ["Seguridad de redes", "Criptografía", "Análisis forense", "Seguridad de software"], subjects: ["Redes", "Sistemas operativos", "Programación", "Criptografía"], skills: ["Evaluar vulnerabilidades", "Proteger infraestructura"], tools: ["Linux", "Python", "Wireshark"] },
  { group: "Computación y desarrollo", name: "Tecnologías de la Información", short: "Administración y operación de servicios y plataformas tecnológicas.", areas: ["Infraestructura", "Servicios en nube", "Redes", "Gestión de TI"], subjects: ["Redes", "Bases de datos", "Sistemas operativos", "Gestión de proyectos"], skills: ["Administrar servicios", "Resolver incidencias"], tools: ["Linux", "SQL", "Cloud"] },
  { group: "Ingeniería y tecnología", name: "Ingeniería en Computación", short: "Integración de hardware, software, redes y sistemas digitales.", areas: ["Arquitectura", "Electrónica digital", "Redes", "Sistemas embebidos"], subjects: ["Programación", "Cálculo", "Física", "Circuitos digitales", "Arquitectura"], skills: ["Integrar hardware y software", "Diseñar sistemas digitales"], tools: ["C/C++", "Linux", "Microcontroladores"] },
  { group: "Ingeniería y tecnología", name: "Ingeniería Electrónica", short: "Diseño y análisis de circuitos y sistemas electrónicos.", areas: ["Circuitos", "Instrumentación", "Señales", "Sistemas embebidos"], subjects: ["Física", "Circuitos", "Electrónica", "Señales y sistemas"], skills: ["Diseñar circuitos", "Medir y probar sistemas"], tools: ["SPICE", "MATLAB", "C"] },
  { group: "Ingeniería y tecnología", name: "Ingeniería Eléctrica", short: "Generación, conversión, control y distribución de energía eléctrica.", areas: ["Potencia", "Máquinas eléctricas", "Control", "Energías"], subjects: ["Física", "Circuitos", "Electromagnetismo", "Control"], skills: ["Analizar sistemas eléctricos", "Diseñar instalaciones"], tools: ["MATLAB", "Simuladores eléctricos"] },
  { group: "Ingeniería y tecnología", name: "Ingeniería Mecatrónica", short: "Integración de mecánica, electrónica, control y programación.", areas: ["Robótica", "Automatización", "Control", "Sistemas embebidos"], subjects: ["Mecánica", "Electrónica", "Programación", "Control"], skills: ["Integrar sistemas", "Automatizar procesos"], tools: ["C/C++", "MATLAB", "CAD"] },
  { group: "Ingeniería y tecnología", name: "Robótica", short: "Diseño, programación y control de sistemas robóticos.", areas: ["Percepción", "Control", "Mecánica", "Autonomía"], subjects: ["Álgebra", "Física", "Programación", "Control"], skills: ["Programar robots", "Integrar sensores y actuadores"], tools: ["Python", "ROS", "C++"] },
  { group: "Ingeniería y tecnología", name: "Telecomunicaciones", short: "Transmisión de información y diseño de redes de comunicación.", areas: ["Redes", "Señales", "Comunicaciones inalámbricas", "Fibra óptica"], subjects: ["Señales", "Electromagnetismo", "Redes", "Probabilidad"], skills: ["Diseñar enlaces", "Analizar redes"], tools: ["Python", "MATLAB", "Wireshark"] }
];

const unamPlans = {
  "Actuaría": {official:"Actuaría",entity:"Facultad de Ciencias",url:"https://www.oferta.unam.mx/planestudios/actuaria-fciencias-planestudios17.pdf",status:"official"},
  "Matemáticas": {official:"Matemáticas",entity:"Facultad de Ciencias",url:"https://www.oferta.unam.mx/planestudios/matematicasplanestudiosfacciencias13.pdf",status:"official"},
  "Matemáticas Aplicadas": {official:"Matemáticas Aplicadas",entity:"Facultad de Ciencias",url:"https://www.oferta.unam.mx/planestudios/matematicasaplicadasplanestudiosfciencias.pdf",status:"official"},
  "Ciencia de Datos": {official:"Ciencia de Datos",entity:"IIMAS y entidades académicas de carrera de origen",url:"https://www.oferta.unam.mx/planestudios/Ciencia-de-Datos-IIMAS_Plan%20de%20estudios19.pdf",status:"official"},
  "Ciencias de la Computación": {official:"Ciencias de la Computación",entity:"Facultad de Ciencias",url:"https://www.oferta.unam.mx/planestudios/cienciascomputacion-fciencias-planestudios17.pdf",status:"official"},
  "Ingeniería en Computación": {official:"Ingeniería en Computación",entity:"Facultad de Ingeniería",url:"https://www.oferta.unam.mx/planestudios/ingcomputacionplanestudiosfacing13.pdf",status:"official"},
  "Telecomunicaciones": {official:"Ingeniería en Telecomunicaciones / Ingeniería en Telecomunicaciones, Sistemas y Electrónica",entity:"UNAM · confirmar plantel y denominación",url:"https://oferta.unam.mx/carreras.php",status:"related"},
  "Ingeniería Electrónica": {official:"Ingeniería Eléctrica Electrónica",entity:"UNAM · confirmar plantel",url:"https://oferta.unam.mx/carreras.php",status:"related"},
  "Economía": {official:"Economía",entity:"Facultad de Economía",url:"https://oferta.unam.mx/carreras.php",status:"related"},
  "Informática": {official:"Informática",entity:"UNAM · confirmar modalidad y plantel",url:"https://oferta.unam.mx/carreras.php",status:"related"},
  "Ingeniería Mecatrónica": {official:"Ingeniería Mecatrónica",entity:"UNAM · confirmar plantel y plan",url:"https://oferta.unam.mx/carreras.php",status:"related"}
};
function renderUnamPlan() {
  const career = data.profile.career;
  const plan = unamPlans[career];
  const box = $("#unam-plan-info");
  if (!box) return;
  if (!career) { box.innerHTML = "<p>Selecciona una carrera para consultar su correspondencia con la oferta académica y los planes oficiales de la UNAM.</p>"; return; }
  if (!plan) {
    box.innerHTML = '<strong>Sin correspondencia oficial confirmada</strong><p>Esta carrera del catálogo es afín, pero no se ha identificado un plan UNAM con la misma denominación. No se cargarán materias inventadas.</p><a href="https://oferta.unam.mx/carreras.php" target="_blank" rel="noopener">Consultar carreras oficiales de la UNAM ↗</a>';
    return;
  }
  const exact = plan.status === "official";
  box.innerHTML = '<span class="plan-status ' + (exact ? "verified" : "related") + '">' + (exact ? "PLAN OFICIAL IDENTIFICADO" : "CARRERA AFÍN · VERIFICAR EQUIVALENCIA") + '</span><h3>' + escapeHTML(plan.official) + '</h3><p>' + escapeHTML(plan.entity) + '</p><a href="' + plan.url + '" target="_blank" rel="noopener">Abrir documento o ficha oficial ↗</a><p class="plan-note">Confirma plantel, modalidad y versión antes de registrar materias: la UNAM puede ofrecer planes distintos para una misma carrera.</p>';
}
 
const emptyWorkspace = (profile = {}) => ({
  profile: { name: profile.name || "", university: "Universidad Nacional Autónoma de México (UNAM)", career: profile.career || "", semester: Number(profile.semester) || 1, approved: 0, total: 0 },
  subjects: [], tasks: [], planProgress: {}, curriculumSemester: "all"
});
let profiles = [];
let activeProfileId = localStorage.getItem("uh-active-profile") || "";
try { profiles = JSON.parse(localStorage.getItem("uh-profiles")) || []; } catch (error) { profiles = []; }
if (!Array.isArray(profiles) || !profiles.length) {
  let legacy = null;
  try { legacy = JSON.parse(localStorage.getItem("uh-data")); } catch (error) { legacy = null; }
  const demoNames = ["Cálculo", "Álgebra", "Programación", "Probabilidad"];
  const demoCount = Array.isArray(legacy?.subjects) ? legacy.subjects.filter((subject) => demoNames.includes(subject.name)).length : 0;
  if (legacy && (legacy.profile?.name === "Estudiante de ejemplo" || demoCount >= 2)) legacy = null;
  const first = legacy || emptyWorkspace();
  const id = "profile-" + Date.now();
  profiles = [{ id, label: first.profile?.name || first.profile?.career || "Mi perfil", career: first.profile?.career || "", workspace: first }];
  activeProfileId = id;
}
let activeRecord = profiles.find((item) => item.id === activeProfileId) || profiles[0];
activeProfileId = activeRecord.id;
let data = activeRecord.workspace || emptyWorkspace({ name: activeRecord.label, career: activeRecord.career });
const persistProfiles = () => {
  activeRecord.workspace = data;
  activeRecord.label = data.profile.name || data.profile.career || "Mi perfil";
  activeRecord.career = data.profile.career || "";
  localStorage.setItem("uh-profiles", JSON.stringify(profiles));
  localStorage.setItem("uh-active-profile", activeProfileId);
  localStorage.setItem("uh-data", JSON.stringify(data));
};
const save = () => persistProfiles();
function refreshProfileSelector() {
  const select = $("#profile-select");
  if (!select) return;
  select.innerHTML = profiles.map((item) => '<option value="' + escapeHTML(item.id) + '">' + escapeHTML(item.label || item.career || "Mi perfil") + (item.career ? " · " + escapeHTML(item.career) : "") + '</option>').join("");
  select.value = activeProfileId;
  $("#active-profile-name").textContent = data.profile.name || data.profile.career || "Perfil";
}
function switchProfile(id) {
  const record = profiles.find((item) => item.id === id);
  if (!record) return;
  persistProfiles();
  activeRecord = record;
  activeProfileId = record.id;
  data = record.workspace || emptyWorkspace({ name: record.label, career: record.career });
  persistProfiles();
  render();
  go("dashboard");
}
function createProfile(name, career, semester) {
  persistProfiles();
  const id = "profile-" + Date.now() + "-" + Math.random().toString(36).slice(2,7);
  const workspace = emptyWorkspace({ name, career, semester });
  const record = { id, label: name || career || "Mi perfil", career, workspace };
  profiles.push(record);
  activeRecord = record;
  activeProfileId = id;
  data = workspace;
  persistProfiles();
  render();
  go("dashboard");
}
const currentUnamPlan = () => Object.values(window.UNAM_STUDY_PLANS || {}).find((plan) => plan.career === data.profile.career);
const getPlanStats = () => {
  const plan = currentUnamPlan();
  if (!plan) return null;
  const courses = plan.semesters.flat();
  const passed = data.planProgress || {};
  let credits = 0, count = 0;
  courses.forEach((course, index) => { if (passed[plan.id + "-" + index]) { credits += Number(course[0]); count += 1; } });
  return {plan, credits, count, total: courses.length, percent: plan.credits ? Math.min(100, Math.round(credits / plan.credits * 100)) : 0};
};
const pct = () => {
  const stats = getPlanStats();
  if (stats) return stats.percent;
  return data.profile.total > 0 && data.profile.approved > 0 ? Math.min(100, Math.round(data.profile.approved / data.profile.total * 100)) : 0;
};
const avg = () => {
  const grades = data.subjects.map((subject) => subject.grade).filter((grade) => grade !== null && grade !== "" && Number.isFinite(Number(grade)));
  return grades.length ? (grades.reduce((sum, grade) => sum + Number(grade), 0) / grades.length).toFixed(1) : "—";
};
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function renderCareers() {
  const groups = [...new Set(careerCatalog.map((career) => career.group))];
  $("#career-list").innerHTML = groups.map((group) => `
    <section class="career-group">
      <div class="career-group-heading"><h3>${group}</h3><span>${careerCatalog.filter((career) => career.group === group).length} carreras</span></div>
      <div class="career-group-grid">${careerCatalog.filter((career) => career.group === group).map((career, index) => `
        <article class="career-card">
          <div class="career-number">${String(index + 1).padStart(2, "0")}</div>
          <h3>${career.name}</h3><p>${career.short}</p>
          <h4>Áreas de estudio</h4><ul>${career.areas.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h4>Materias frecuentes</h4><div class="tag-list">${career.subjects.map((item) => `<span>${item}</span>`).join("")}</div>
          <h4>Habilidades</h4><ul>${career.skills.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h4>Herramientas</h4><div class="tag-list">${career.tools.map((item) => `<span>${item}</span>`).join("")}</div>
          <button class="primary choose-career" data-career="${career.name}">Elegir esta carrera</button>
        </article>`).join("")}</div>
    </section>`).join("");
  const chosen = careerCatalog.find((career) => career.name === data.profile.career);
  $("#career-home-title").textContent = chosen ? "Tu ruta: " + chosen.name : "Encuentra tu espacio académico";
  $("#career-home-description").textContent = chosen ? chosen.short + " Explora su ruta para organizar tus materias y objetivos." : "Explora carreras relacionadas con matemáticas, estadística, datos, computación e ingeniería tecnológica.";
  renderUnamPlan();
  renderCurriculum();
}

function renderCurriculum() {
  const root = $("#unam-curriculum");
  if (!root) return;
  const allPlans = window.UNAM_STUDY_PLANS || {};
  const plan = Object.values(allPlans).find((item) => item.career === data.profile.career);
  if (!plan) {
    root.innerHTML = '<div class="panel"><p>Para esta carrera todavía no hay un mapa curricular oficial incorporado. No se mostrarán materias genéricas como si fueran oficiales.</p><a href="https://oferta.unam.mx/carreras.php" target="_blank" rel="noopener">Consultar oferta académica UNAM ↗</a></div>';
    return;
  }
  const passed = data.planProgress || {};
  const courses = plan.semesters.flat();
  const listedCredits = courses.reduce((sum, course) => sum + Number(course[0]), 0);
  let completedCredits = 0;
  let completedCount = 0;
  courses.forEach((course, index) => {
    if (passed[plan.id + "-" + index]) {
      completedCount += 1;
      completedCredits += Number(course[0]);
    }
  });
  const percent = plan.credits ? Math.min(100, Math.round(completedCredits / plan.credits * 100)) : 0;
  const selectedSemester = data.curriculumSemester || "all";
  let markup = '<div class="panel curriculum-meta"><span class="plan-status verified">PLAN OFICIAL UNAM</span><h3>' + escapeHTML(plan.name) + '</h3><p>' + escapeHTML(plan.entity) + ' · ' + escapeHTML(plan.version) + '</p><div class="curriculum-stats"><div><strong>' + plan.credits + '</strong><small>créditos oficiales del plan</small></div><div><strong>' + listedCredits + '</strong><small>créditos en el desglose visible</small></div><div><strong>' + completedCredits + '</strong><small>créditos marcados</small></div><div><strong>' + percent + '%</strong><small>avance sobre el total oficial</small></div></div><div class="bar"><i style="width:' + percent + '%"></i></div><p>' + completedCount + ' de ' + courses.length + ' asignaturas listadas marcadas como acreditadas. Si el desglose visible difiere del total oficial, consulta las notas y el PDF del plan.</p><label class="curriculum-filter">Mostrar <select id="curriculum-semester-filter"><option value="all"' + (selectedSemester === "all" ? " selected" : "") + '>Todos los semestres</option>' + plan.semesters.map((_,i)=>'<option value="' + (i+1) + '"' + (selectedSemester === String(i+1) ? " selected" : "") + '>Semestre ' + (i+1) + '</option>').join("") + '</select></label><a href="' + plan.url + '" target="_blank" rel="noopener">Consultar documento oficial UNAM ↗</a><p class="plan-note">' + escapeHTML(plan.notes) + '</p></div>';
  let courseIndex = 0;
  plan.semesters.forEach((semester, semesterIndex) => {
    const visible = selectedSemester === "all" || selectedSemester === String(semesterIndex + 1);
    const semesterCredits = semester.reduce((sum, course) => sum + Number(course[0]), 0);
    if (visible) {
      markup += '<section class="semester-block"><div class="semester-title"><h3>Semestre ' + (semesterIndex + 1) + '</h3><span>' + semesterCredits + ' créditos listados</span></div>';
      semester.forEach((course) => {
        const key = plan.id + "-" + courseIndex;
        const checked = Boolean(passed[key]);
        markup += '<label class="curriculum-course"><input type="checkbox" data-plan-course="' + key + '"' + (checked ? ' checked' : '') + '><span>' + escapeHTML(course[1]) + '<small>' + (Number(course[0]) ? course[0] + ' créditos' : 'Sin créditos') + '</small></span><b>' + (checked ? 'Acreditada' : 'Pendiente') + '</b></label>';
        courseIndex += 1;
      });
      markup += '</section>';
    } else {
      courseIndex += semester.length;
    }
  });
  if (plan.electives && plan.electives.length) {
    markup += '<section class="panel"><h3>Ejemplos de asignaturas optativas del plan</h3><div class="tag-list">' + plan.electives.map((item) => '<span>' + escapeHTML(item) + '</span>').join('') + '</div><p class="plan-note">La oferta de optativas y su disponibilidad puede cambiar por semestre y debe confirmarse con la coordinación.</p></section>';
  }
  root.innerHTML = markup;
}

function renderCareerContext() {
  const career = careerCatalog.find((item) => item.name === data.profile.career);
  $("#career-home-title").textContent = career ? "Tu ruta en " + career.name : "Encuentra tu espacio académico";
  $("#career-home-description").textContent = career
    ? career.short + " Áreas clave: " + career.areas.slice(0,3).join(" · ") + "."
    : "Selecciona una carrera en tu perfil para adaptar el panel, las materias sugeridas y tu trayectoria.";
  const subjectPanel = $("#career-focus");
  if (subjectPanel) subjectPanel.innerHTML = career
    ? '<h3>Enfoque de ' + escapeHTML(career.name) + '</h3><p>' + escapeHTML(career.short) + '</p><div class="tag-list">' + career.subjects.slice(0,6).map((x) => '<span>' + escapeHTML(x) + '</span>').join("") + '</div><p><b>Herramientas:</b> ' + career.tools.map(escapeHTML).join(" · ") + '</p>'
    : '<p>Completa tu carrera en Perfil académico para ver materias, habilidades y herramientas relevantes.</p>';
}
function renderProfileList() {
  const root = $("#profile-list");
  if (!root) return;
  root.innerHTML = profiles.map((item) => '<article class="profile-choice ' + (item.id === activeProfileId ? "selected" : "") + '"><div><strong>' + escapeHTML(item.label || "Mi perfil") + '</strong><small>' + escapeHTML(item.career || "Carrera sin seleccionar") + '</small></div><button type="button" data-switch-profile="' + escapeHTML(item.id) + '">' + (item.id === activeProfileId ? "Perfil activo" : "Abrir perfil") + '</button></article>').join("");
}
function render() {
  const progress = pct(), average = avg(), pending = data.tasks.filter((task) => !task.done);
  $("#name").value = data.profile.name || "";
  $("#university").value = "Universidad Nacional Autónoma de México (UNAM)";
  $("#career").value = data.profile.career || "";
  $("#semester").value = data.profile.semester || 1;
  $("#approved").value = data.profile.approved || 0;
  $("#total").value = data.profile.total || 0;
  $("#s-subjects").textContent = data.subjects.length;
  $("#s-tasks").textContent = pending.length;
  $("#s-average").textContent = average;
  $("#s-progress").textContent = progress + "%";
  $("#progress").textContent = progress + "%";
  $("#bar").style.width = progress + "%";
  const planStats = getPlanStats();
  $("#credits").textContent = planStats ? planStats.credits + " créditos acreditados de " + planStats.plan.credits + " del plan oficial UNAM." : (data.profile.total > 0 ? "Avance según las materias que registraste en tu perfil." : "Selecciona una carrera UNAM con mapa curricular para calcular tu avance.");
  $("#avg").textContent = average;
  $("#journey").textContent = progress + "%";
  $("#journey-bar").style.width = progress + "%";
  $("#journey-detail").textContent = planStats ? planStats.count + " materias acreditadas de " + planStats.total + " asignaturas listadas. " + planStats.credits + " créditos registrados en " + planStats.plan.name + "." : (data.profile.total > 0 ? data.profile.approved + " materias aprobadas de " + data.profile.total + ". " + (data.profile.university || "Universidad sin configurar") + " · " + (data.profile.career || "Carrera sin configurar") : "Aún no has configurado tu plan académico. Tu progreso comenzará cuando selecciones tu carrera.");
  $("#upcoming").innerHTML = pending.slice().sort((a,b) => a.date.localeCompare(b.date)).map((task) => '<div class="row"><span>' + escapeHTML(task.title) + '<small>' + escapeHTML(task.subject || "Sin materia") + " · " + escapeHTML(task.date) + '</small></span><span>◦</span></div>').join("") || "<p>Sin tareas pendientes.</p>";
  $("#subject-summary").innerHTML = data.subjects.map((subject) => '<div class="row"><b>' + escapeHTML(subject.name) + '</b><span>' + Number(subject.credits) + " créditos · " + (subject.grade ?? "—") + "</span></div>").join("") || "<p>Aún no agregas materias.</p>";
  $("#subjects-list").innerHTML = data.subjects.map((subject) => '<article class="subject-card"><small>ASIGNATURA</small><h3>' + escapeHTML(subject.name) + '</h3><p>' + Number(subject.credits) + " créditos · Calificación: " + (subject.grade ?? "Sin calificar") + "</p></article>").join("") || '<div class="empty-state">Todavía no hay materias. Añade las asignaturas de tu semestre para comenzar.</div>';
  $("#tasks-list").innerHTML = data.tasks.map((task,index) => '<div class="row"><span>' + escapeHTML(task.title) + '<small>' + escapeHTML(task.subject || "Sin materia") + " · " + escapeHTML(task.date) + '</small></span><span><label><input type="checkbox" data-done="' + index + '"' + (task.done ? " checked" : "") + '> Hecha</label> <button data-del="' + index + '">×</button></span></div>').join("") || "<p>No hay tareas registradas.</p>";
  $("#grade-list").innerHTML = data.subjects.map((subject) => '<div class="row"><b>' + escapeHTML(subject.name) + "</b><span>" + (subject.grade ?? "Sin calificar") + "</span></div>").join("") || "<p>Agrega materias y calificaciones para consultar tu promedio.</p>";
  const monthDate = new Date(today.getFullYear(), today.getMonth(), 1);
  $("#month").textContent = monthDate.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
  const firstDay = (monthDate.getDay() + 6) % 7, days = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const headers = ["L","M","M","J","V","S","D"].map((day) => '<div class="day"><small>' + day + "</small></div>").join("");
  const blanks = Array.from({length:firstDay}, () => '<div class="day"></div>').join("");
  const dates = Array.from({length:days}, (_,index) => '<div class="day">' + (index + 1) + "</div>").join("");
  $("#calendar-grid").innerHTML = headers + blanks + dates;
  $("#name").value = data.profile.name;
  $("#university").value = data.profile.university;
  $("#career").value = data.profile.career;
  $("#semester").value = data.profile.semester;
  $("#approved").value = data.profile.approved;
  $("#total").value = data.profile.total;
  renderCareers();
  renderCareerContext();
  renderProfileList();
  refreshProfileSelector();
}
const labels = {
  dashboard: ["Panel general","Tu semestre, <em>bajo control.</em>","Organiza tus materias, pendientes y objetivos en un solo lugar."],
  careers: ["Explorar carreras","Encuentra tu <em>ruta académica.</em>","Compara carreras afines organizadas en tres grandes áreas."],
  subjects: ["Mis materias","Tus materias, <em>bien organizadas.</em>","Administra tus asignaturas."],
  tasks: ["Tareas y entregas","Que nada se <em>te pase.</em>","Consulta tus pendientes."],
  calendar: ["Calendario","Visualiza tu <em>semana.</em>","Fechas importantes."],
  grades: ["Calificaciones","Mide tu <em>avance.</em>","Consulta tus resultados."],
  "unam-plan": ["Plan de estudios UNAM","Tu mapa <em>curricular.</em>","Consulta asignaturas oficiales por semestre y registra tus materias acreditadas."],
  progress: ["Mi trayectoria","Cada semestre <em>cuenta.</em>","Visualiza tu avance."],
  profile: ["Perfil académico","Tu espacio, <em>tus reglas.</em>","Configura tu información."]
};
function go(view) {
  $$(".view").forEach((element) => element.classList.remove("active"));
  $("#" + (view === "progress" ? "progress-view" : view)).classList.add("active");
  $$("nav button").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  $("#crumb").textContent = labels[view][0];
  $("#title").innerHTML = labels[view][1];
  $("#subtitle").textContent = labels[view][2];
}
$$("[data-view]").forEach((button) => button.addEventListener("click", () => go(button.dataset.view)));
$$("[data-go]").forEach((button) => button.addEventListener("click", () => go(button.dataset.go)));
$("#career-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-career]");
  if (!button) return;
  data.profile.career = button.dataset.career;
  save(); render(); go("profile");
});
function openTaskDialog() { $("#task-dialog").showModal(); }
$("#new-task").addEventListener("click", openTaskDialog);
$("#add-task-2").addEventListener("click", openTaskDialog);
$("#add-subject").addEventListener("click", () => $("#subject-dialog").showModal());
$("#cancel-task").addEventListener("click", () => $("#task-dialog").close());
$("#cancel-subject").addEventListener("click", () => $("#subject-dialog").close());
$("#task-form").addEventListener("submit", (event) => {
  event.preventDefault();
  data.tasks.push({title:$("#task-title").value,subject:$("#task-subject").value,date:$("#task-date").value,done:false});
  save(); render(); $("#task-dialog").close(); event.target.reset();
});
$("#subject-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const grade = $("#subject-grade").value;
  data.subjects.push({name:$("#subject-name").value,credits:Number($("#subject-credits").value),grade:grade === "" ? null : Number(grade)});
  save(); render(); $("#subject-dialog").close(); event.target.reset();
});
$("#unam-curriculum").addEventListener("change", (event) => {
  if (event.target.id === "curriculum-semester-filter") {
    data.curriculumSemester = event.target.value;
    save(); renderCurriculum();
    return;
  }
  const key = event.target.dataset.planCourse;
  if (!key) return;
  data.planProgress = data.planProgress || {};
  data.planProgress[key] = event.target.checked;
  save(); renderCurriculum();
});
$("#tasks-list").addEventListener("click", (event) => {
  const index = event.target.dataset.del;
  if (index !== undefined) { data.tasks.splice(Number(index),1); save(); render(); }
});
$("#tasks-list").addEventListener("change", (event) => {
  const index = event.target.dataset.done;
  if (index !== undefined) { data.tasks[Number(index)].done = event.target.checked; save(); render(); }
});
$("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  data.profile = {name:$("#name").value,university:"Universidad Nacional Autónoma de México (UNAM)",career:$("#career").value,semester:Number($("#semester").value),approved:Math.max(0,Number($("#approved").value)||0),total:Math.max(0,Number($("#total").value)||0)};
  save(); render(); alert("Cambios guardados en este perfil");
});
$("#profile-select").addEventListener("change", (event) => switchProfile(event.target.value));
$("#create-profile").addEventListener("click", () => $("#profile-dialog").showModal());
$("#create-profile-inline").addEventListener("click", () => $("#profile-dialog").showModal());
$("#cancel-profile").addEventListener("click", () => $("#profile-dialog").close());
$("#profile-create-form").addEventListener("submit", (event) => {
  event.preventDefault();
  createProfile($("#new-profile-name").value.trim(), $("#new-profile-career").value, Number($("#new-profile-semester").value) || 1);
  $("#profile-dialog").close(); event.target.reset();
});
$("#profile-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-switch-profile]");
  if (button) switchProfile(button.dataset.switchProfile);
});
$("#theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("uh-theme",document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("uh-theme") === "dark") document.body.classList.add("dark");
render();