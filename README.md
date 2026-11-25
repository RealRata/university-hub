# University Hub

Plataforma web de organización universitaria para estudiantes de cualquier carrera e institución. El proyecto combina herramientas académicas con una interfaz moderna, clara y adaptable.

## Acceso público
La aplicación se publica con GitHub Pages:
**https://realrata.github.io/university-hub/**

El archivo raíz redirige a `frontend/`, donde vive la aplicación web.

## Funciones disponibles en el prototipo
- Panel de resumen del semestre.
- Registro de materias y créditos.
- Tareas, fechas de entrega y seguimiento.
- Calendario mensual.
- Calificaciones y promedio estimado.
- Trayectoria académica y perfil editable.
- Tema claro/oscuro.
- Guardado local en el navegador mediante localStorage.

## Ejecutar localmente
Abre `frontend/index.html` en un navegador moderno. No requiere instalación ni servidor para el prototipo.

## Arquitectura objetivo
- **Frontend:** HTML, CSS y JavaScript modular; aplicación responsive.
- **Backend:** Python + Django + Django REST Framework.
- **Base de datos:** PostgreSQL.
- **Autenticación:** sesiones seguras y recuperación de cuenta.
- **Visualización:** Chart.js para estadísticas académicas.
- **Despliegue:** GitHub Pages para el prototipo; backend y base de datos en un servicio compatible cuando se implemente la fase de servidor.

## Documentación
- [Arquitectura](docs/architecture.md)
- [Alcance funcional](docs/product-spec.md)
- [Modelo de datos](docs/data-model.md)
- [Roadmap](docs/roadmap.md)

## Estado y límites importantes
Esta versión es un **prototipo frontend**. Los datos se guardan únicamente en el navegador donde se capturan. Todavía no hay cuentas reales, sincronización entre dispositivos, base de datos central ni conexión con sistemas escolares. Las calificaciones, materias y avances son datos de ejemplo que cada estudiante puede editar. Los planes de estudio deberán verificarse con fuentes institucionales antes de presentarse como oficiales.

## Principios del producto
1. Funcionar para cualquier carrera, sin asumir un plan de estudios único.
2. Permitir personalizar universidad, carrera, semestre y materias.
3. Separar claramente datos de ejemplo de información oficial.
4. Mantener los datos privados y minimizar la información recopilada.
5. Ser accesible, usable en móvil y escritorio, y fácil de ampliar.
