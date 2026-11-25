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

## Planes de estudio UNAM\n\nEl perfil académico queda orientado a la UNAM. El explorador distingue las carreras con documento oficial identificado de las carreras afines cuya equivalencia todavía debe verificarse. Se incluyen enlaces institucionales a planes de Actuaría, Matemáticas, Matemáticas Aplicadas, Ciencia de Datos, Ciencias de la Computación e Ingeniería en Computación. Los enlaces de carreras afines llevan al catálogo oficial para evitar presentar una equivalencia como si fuera un plan idéntico. La UNAM puede tener planes diferentes por facultad, plantel, modalidad y versión; confirma esos datos antes de capturar materias.\n\nFuente institucional: [Oferta Académica UNAM](https://oferta.unam.mx/carreras.php).\n\n## Estado y límites
Esta versión es un **prototipo frontend**. Los datos personales se guardan únicamente en el navegador donde se capturan. Todavía no hay cuentas, sincronización entre dispositivos, base de datos central ni conexión con sistemas escolares. El explorador de carreras contiene orientación general para las carreras afines incluidas; sus listas de materias no son planes oficiales ni sustituyen los programas de cada universidad. El catálogo podrá ampliarse según las instituciones y los planes que se incorporen. Los planes, créditos, seriaciones y requisitos deberán verificarse con fuentes institucionales antes de presentarse como oficiales.

## Principios del producto
1. Diseñar herramientas comunes para todas las carreras y vistas especializadas por disciplina.
2. Permitir personalizar universidad, carrera, semestre y materias.
3. Distinguir orientación general de información académica oficial verificada.
4. Mantener los datos privados y minimizar la información recopilada.
5. Ser accesible, adaptable a móvil y escritorio, y fácil de ampliar.
