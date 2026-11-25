# Alcance funcional del producto

## Público objetivo y alcance inicial
Estudiantes universitarios. La primera versión especializada contempla:
- **Actuaría:** probabilidad, estadística, matemáticas financieras, riesgo y análisis de datos.
- **Ciencias de la Computación:** algoritmos, estructuras de datos, fundamentos teóricos, software, bases de datos e inteligencia artificial.
- **Ingeniería en Computación:** arquitectura de computadoras, sistemas digitales, electrónica, redes, hardware y software.

La arquitectura debe permitir incorporar otras carreras e instituciones sin duplicar las herramientas generales.

## Experiencia y navegación
Interfaz mixta: profesional y académica, con navegación lateral en escritorio, navegación compacta en móvil, jerarquía visual clara, tarjetas de resumen, formularios sencillos y tema claro/oscuro.

## Módulos
1. **Panel general:** resumen de materias, tareas próximas, promedio, objetivos y avance.
2. **Explorador de carreras:** áreas, materias frecuentes, habilidades y herramientas por disciplina.
3. **Perfil académico:** nombre visible, institución, campus, facultad, carrera, plan, semestre y preferencias.
4. **Materias:** catálogo personal, créditos, docente opcional, grupo, aula y estado.
5. **Tareas y proyectos:** descripción, materia, fecha límite, prioridad, estado y archivos/enlaces futuros.
6. **Calendario:** clases, exámenes, entregas, eventos y recordatorios.
7. **Horario:** vista semanal por día y bloques horarios, con aula y materia.
8. **Calificaciones:** evaluaciones parciales, ponderaciones, calificación final y promedio simple/ponderado claramente identificado.
9. **Trayectoria:** materias del plan, prerrequisitos, créditos requeridos, aprobados y pendientes.
10. **Planificador de estudio:** objetivos semanales, sesiones de enfoque y registro de tiempo.
11. **Notas y recursos:** apuntes por materia, enlaces, bibliografía y materiales personales.
12. **Estadísticas:** evolución de calificaciones, distribución por materia, carga de trabajo y progreso.
13. **Preferencias y cuenta:** accesibilidad, tema, exportación y privacidad cuando exista backend.

## Criterios de diseño
- Responsive para móvil, tableta y escritorio.
- Accesibilidad por teclado, contraste suficiente y etiquetas comprensibles.
- Estados vacíos con instrucciones útiles.
- Confirmación antes de acciones destructivas.
- Formularios con validación y mensajes de error claros.
- No mostrar datos ficticios como si fueran registros reales.
- Las materias sugeridas por carrera son orientativas hasta vincularse a un plan oficial con fuente, vigencia y verificación.

## Estado de implementación
El prototipo implementa panel, explorador de las tres carreras iniciales, selector de carrera, materias, tareas, calendario mensual, calificaciones básicas, trayectoria editable, perfil y tema. Los demás módulos están definidos para su implementación incremental. El prototipo almacena datos en `localStorage`; no debe utilizarse para información sensible ni asumirse sincronizado.
