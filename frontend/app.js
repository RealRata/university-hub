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

let data;
try { data = JSON.parse(localStorage.getItem("uh-data")); } catch (error) { data = null; }
const demoSubjectNames = ["Cálculo", "Álgebra", "Programación", "Probabilidad"];
const demoSubjectCount = Array.isArray(data?.subjects) ? data.subjects.filter((subject) => demoSubjectNames.includes(subject.name)).length : 0;
const isOldDemo = Boolean(data && (data.profile?.name === "Estudiante de ejemplo" || demoSubjectCount >= 2));
if (isOldDemo) { localStorage.removeItem("uh-data"); data = null; }
data = data || { profile: { name: "", university: "", career: "", semester: 1, approved: 0, total: 0 }, subjects: [], tasks: [] };

const save = () => localStorage.setItem("uh-data", JSON.stringify(data));
const pct = () => data.profile.total > 0 && data.profile.approved > 0 ? Math.min(100, Math.round(data.profile.approved / data.profile.total * 100)) : 0;
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
}
function render() {
  const progress = pct(), average = avg(), pending = data.tasks.filter((task) => !task.done);
  $("#s-subjects").textContent = data.subjects.length;
  $("#s-tasks").textContent = pending.length;
  $("#s-average").textContent = average;
  $("#s-progress").textContent = progress + "%";
  $("#progress").textContent = progress + "%";
  $("#bar").style.width = progress + "%";
  $("#credits").textContent = data.profile.total > 0 ? "Avance según las materias que registraste en tu perfil." : "Configura tu plan de estudios para calcular tu avance. Por ahora es 0%.";
  $("#avg").textContent = average;
  $("#journey").textContent = progress + "%";
  $("#journey-bar").style.width = progress + "%";
  $("#journey-detail").textContent = data.profile.total > 0 ? data.profile.approved + " materias aprobadas de " + data.profile.total + ". " + (data.profile.university || "Universidad sin configurar") + " · " + (data.profile.career || "Carrera sin configurar") : "Aún no has configurado tu plan académico. Tu progreso comenzará cuando registres tus datos reales.";
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
}
const labels = {
  dashboard: ["Panel general","Tu semestre, <em>bajo control.</em>","Organiza tus materias, pendientes y objetivos en un solo lugar."],
  careers: ["Explorar carreras","Encuentra tu <em>ruta académica.</em>","Compara carreras afines organizadas en tres grandes áreas."],
  subjects: ["Mis materias","Tus materias, <em>bien organizadas.</em>","Administra tus asignaturas."],
  tasks: ["Tareas y entregas","Que nada se <em>te pase.</em>","Consulta tus pendientes."],
  calendar: ["Calendario","Visualiza tu <em>semana.</em>","Fechas importantes."],
  grades: ["Calificaciones","Mide tu <em>avance.</em>","Consulta tus resultados."],
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
  data.profile = {name:$("#name").value,university:$("#university").value,career:$("#career").value,semester:Number($("#semester").value),approved:Math.max(0,Number($("#approved").value)||0),total:Math.max(0,Number($("#total").value)||0)};
  save(); render(); alert("Perfil guardado en este navegador");
});
$("#theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("uh-theme",document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("uh-theme") === "dark") document.body.classList.add("dark");
render();