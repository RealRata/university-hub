# University Hub

Plataforma web de gestión académica para estudiantes universitarios. Su catálogo inicial reúne **20 carreras afines** agrupadas en matemáticas/estadística/análisis, computación/desarrollo e ingeniería/tecnología. Actuaría, Ciencias de la Computación e Ingeniería en Computación son las disciplinas de referencia del proyecto.

## Acceso público
**https://realrata.github.io/university-hub/**

La página raíz redirige a `frontend/`, donde vive la aplicación.

## Funciones implementadas en el prototipo
- Panel de resumen del semestre.
- Explorador de 20 carreras afines organizadas en tres áreas académicas.
- Fichas por carrera con áreas de estudio, materias frecuentes, habilidades y herramientas.
- Selector de carrera en el perfil académico.
- Registro personal de materias y créditos.
- Tareas, fechas de entrega y seguimiento.
- Calendario mensual.
- Calificaciones y promedio simple estimado.
- Trayectoria editable y perfil académico.
- Tema claro/oscuro.
- Guardado local en el navegador mediante `localStorage`.

## Ejecutar localmente
Abre `frontend/index.html` en un navegador moderno. No requiere instalación ni servidor para este prototipo.

## Arquitectura objetivo
- **Frontend:** HTML, CSS y JavaScript; aplicación responsive.
- **Backend futuro:** Python + Django + Django REST Framework.
- **Base de datos futura:** PostgreSQL.
- **Autenticación futura:** sesiones seguras y recuperación de cuenta.
- **Visualización futura:** gráficas accesibles.
- **Despliegue:** GitHub Pages para el prototipo; backend y base de datos se desplegarán cuando se implemente la fase de servidor.

## Documentación
- [Arquitectura](docs/architecture.md)
- [Alcance funcional](docs/product-spec.md)
- [Modelo de datos](docs/data-model.md)
- [Roadmap](docs/roadmap.md)

## Planes de estudio UNAM

El módulo **Plan de estudios UNAM** incorpora mapas curriculares por semestre para Actuaría (Facultad de Ciencias), Matemáticas (Facultad de Ciencias), Matemáticas Aplicadas (Facultad de Ciencias), Ciencias de la Computación (Facultad de Ciencias), Ingeniería en Computación (Facultad de Ingeniería) y una ruta de Ciencia de Datos con carrera de origen Actuaría (Facultad de Ciencias). Incluye asignaturas, créditos cuando el documento los especifica, optativas, fuente y notas de seriación o ingreso indirecto. El estudiante puede marcar materias acreditadas y consultar el avance por créditos de las materias listadas.

Ciencia de Datos es de ingreso indirecto: los primeros cuatro semestres corresponden a una carrera de origen y del quinto al octavo se cursa el bloque propio de Ciencia de Datos. La ruta incluida está identificada explícitamente como Actuaría de la Facultad de Ciencias; no debe confundirse con las demás rutas de ingreso.

Fuentes: [Oferta Académica UNAM](https://oferta.unam.mx/carreras.php) y los documentos PDF enlazados desde cada mapa curricular.

## Estado y límites
Esta versión es un **prototipo frontend**. Los datos personales se guardan únicamente en el navegador donde se capturan. Todavía no hay cuentas, sincronización entre dispositivos, base de datos central ni conexión con sistemas escolares. El explorador de carreras contiene orientación general para las carreras afines incluidas; sus listas de materias no son planes oficiales ni sustituyen los programas de cada universidad. El catálogo podrá ampliarse según las instituciones y los planes que se incorporen. Los planes, créditos, seriaciones y requisitos deberán verificarse con fuentes institucionales antes de presentarse como oficiales.

## Principios del producto
1. Diseñar herramientas comunes para todas las carreras y vistas especializadas por disciplina.
2. Permitir personalizar universidad, carrera, semestre y materias.
3. Distinguir orientación general de información académica oficial verificada.
4. Mantener los datos privados y minimizar la información recopilada.
5. Ser accesible, adaptable a móvil y escritorio, y fácil de ampliar.
