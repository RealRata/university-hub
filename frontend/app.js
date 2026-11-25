const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const today = new Date();
const iso = (d) => {
  const x = new Date(d);
  return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
};

let data;
try { data = JSON.parse(localStorage.getItem("uh-data")); } catch (error) { data = null; }
data = data || {
  profile: { name: "Estudiante de ejemplo", university: "Mi universidad", career: "Carrera por configurar", semester: 3, approved: 12, total: 37 },
  subjects: [
    { name: "Cálculo", credits: 10, grade: 9.2 },
    { name: "Álgebra", credits: 8, grade: 8.5 },
    { name: "Programación", credits: 8, grade: 8.8 },
    { name: "Probabilidad", credits: 8, grade: null }
  ],
  tasks: [
    { title: "Lista de ejercicios · Unidad 2", subject: "Cálculo", date: iso(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)), done: false },
    { title: "Lectura: fundamentos", subject: "Programación", date: iso(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)), done: false },
    { title: "Examen parcial", subject: "Álgebra", date: iso(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6)), done: false }
  ]
};

const save = () => localStorage.setItem("uh-data", JSON.stringify(data));
const pct = () => data.profile.total > 0 ? Math.min(100, Math.round(data.profile.approved / data.profile.total * 100)) : 0;
const avg = () => {
  const grades = data.subjects.map((subject) => subject.grade).filter((grade) => grade !== null && grade !== "" && Number.isFinite(Number(grade)));
  return grades.length ? (grades.reduce((sum, grade) => sum + Number(grade), 0) / grades.length).toFixed(1) : "—";
};

function render() {
  const progress = pct();
  const average = avg();
  const pending = data.tasks.filter((task) => !task.done);
  $("#s-subjects").textContent = data.subjects.length;
  $("#s-tasks").textContent = pending.length;
  $("#s-average").textContent = average;
  $("#s-progress").textContent = progress + "%";
  $("#progress").textContent = progress + "%";
  $("#bar").style.width = progress + "%";
  $("#credits").textContent = "Avance calculado con materias registradas";
  $("#avg").textContent = average;
  $("#journey").textContent = progress + "%";
  $("#journey-bar").style.width = progress + "%";
  $("#journey-detail").textContent = data.profile.approved + " materias aprobadas de " + data.profile.total + ". " + data.profile.university + " · " + data.profile.career;

  $("#upcoming").innerHTML = pending.slice().sort((a, b) => a.date.localeCompare(b.date)).map((task) =>
    '<div class="row"><span>' + escapeHTML(task.title) + '<small>' + escapeHTML(task.subject || "Sin materia") + " · " + escapeHTML(task.date) + '</small></span><span>◦</span></div>'
  ).join("") || "<p>Sin tareas pendientes.</p>";
  $("#subject-summary").innerHTML = data.subjects.map((subject) =>
    '<div class="row"><b>' + escapeHTML(subject.name) + '</b><span>' + Number(subject.credits) + " créditos · " + (subject.grade ?? "—") + "</span></div>"
  ).join("");
  $("#subjects-list").innerHTML = data.subjects.map((subject) =>
    '<article class="subject-card"><small>ASIGNATURA</small><h3>' + escapeHTML(subject.name) + '</h3><p>' + Number(subject.credits) + " créditos · Calificación: " + (subject.grade ?? "Sin calificar") + "</p></article>"
  ).join("");
  $("#tasks-list").innerHTML = data.tasks.map((task, index) =>
    '<div class="row"><span>' + escapeHTML(task.title) + '<small>' + escapeHTML(task.subject || "Sin materia") + " · " + escapeHTML(task.date) + '</small></span><span><label><input type="checkbox" data-done="' + index + '"' + (task.done ? " checked" : "") + '> Hecha</label> <button data-del="' + index + '">×</button></span></div>'
  ).join("") || "<p>No hay tareas registradas.</p>";
  $("#grade-list").innerHTML = data.subjects.map((subject) =>
    '<div class="row"><b>' + escapeHTML(subject.name) + "</b><span>" + (subject.grade ?? "Sin calificar") + "</span></div>"
  ).join("");
  const monthDate = new Date(today.getFullYear(), today.getMonth(), 1);
  $("#month").textContent = monthDate.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
  const firstDay = (monthDate.getDay() + 6) % 7;
  const days = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const headers = ["L", "M", "M", "J", "V", "S", "D"].map((day) => '<div class="day"><small>' + day + "</small></div>").join("");
  const blanks = Array.from({ length: firstDay }, () => '<div class="day"></div>').join("");
  const dates = Array.from({ length: days }, (_, index) => '<div class="day">' + (index + 1) + "</div>").join("");
  $("#calendar-grid").innerHTML = headers + blanks + dates;

  $("#name").value = data.profile.name;
  $("#university").value = data.profile.university;
  $("#career").value = data.profile.career;
  $("#semester").value = data.profile.semester;
  $("#approved").value = data.profile.approved;
  $("#total").value = data.profile.total;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

const labels = {
  dashboard: ["Panel general", "Tu semestre, <em>bajo control.</em>", "Organiza tus materias, pendientes y objetivos en un solo lugar."],
  subjects: ["Mis materias", "Tus materias, <em>bien organizadas.</em>", "Administra tus asignaturas."],
  tasks: ["Tareas y entregas", "Que nada se <em>te pase.</em>", "Consulta tus pendientes."],
  calendar: ["Calendario", "Visualiza tu <em>semana.</em>", "Fechas importantes."],
  grades: ["Calificaciones", "Mide tu <em>avance.</em>", "Consulta tus resultados."],
  progress: ["Mi trayectoria", "Cada semestre <em>cuenta.</em>", "Visualiza tu avance."],
  profile: ["Perfil académico", "Tu espacio, <em>tus reglas.</em>", "Configura tu información."]
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

function openTaskDialog() { $("#task-dialog").showModal(); }
$("#new-task").addEventListener("click", openTaskDialog);
$("#add-task-2").addEventListener("click", openTaskDialog);
$("#add-subject").addEventListener("click", () => $("#subject-dialog").showModal());
$("#cancel-task").addEventListener("click", () => $("#task-dialog").close());
$("#cancel-subject").addEventListener("click", () => $("#subject-dialog").close());

$("#task-form").addEventListener("submit", (event) => {
  event.preventDefault();
  data.tasks.push({ title: $("#task-title").value, subject: $("#task-subject").value, date: $("#task-date").value, done: false });
  save(); render(); $("#task-dialog").close(); event.target.reset();
});

$("#subject-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const grade = $("#subject-grade").value;
  data.subjects.push({ name: $("#subject-name").value, credits: Number($("#subject-credits").value), grade: grade === "" ? null : Number(grade) });
  save(); render(); $("#subject-dialog").close(); event.target.reset();
});

$("#tasks-list").addEventListener("click", (event) => {
  const index = event.target.dataset.del;
  if (index !== undefined) { data.tasks.splice(Number(index), 1); save(); render(); }
});
$("#tasks-list").addEventListener("change", (event) => {
  const index = event.target.dataset.done;
  if (index !== undefined) { data.tasks[Number(index)].done = event.target.checked; save(); render(); }
});

$("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  data.profile = {
    name: $("#name").value,
    university: $("#university").value,
    career: $("#career").value,
    semester: Number($("#semester").value),
    approved: Number($("#approved").value),
    total: Math.max(1, Number($("#total").value))
  };
  save(); render(); alert("Perfil guardado en este navegador");
});

$("#theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("uh-theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("uh-theme") === "dark") document.body.classList.add("dark");
render();
