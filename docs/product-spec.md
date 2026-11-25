# Alcance funcional del producto

## Público objetivo
Estudiantes universitarios de cualquier carrera, facultad, campus o institución. El producto no presupone un plan de estudios específico.

## Experiencia y navegación
Interfaz mixta: profesional y académica, con navegación lateral en escritorio, navegación compacta en móvil, jerarquía visual clara, tarjetas de resumen, formularios sencillos y tema claro/oscuro.

## Módulos previstos
1. **Panel general:** resumen de materias, tareas próximas, promedio, objetivos y avance.
2. **Perfil académico:** nombre visible, institución, campus, facultad, carrera, plan, semestre y preferencias.
3. **Materias:** catálogo personal, créditos, docente opcional, grupo, aula y estado.
4. **Tareas y proyectos:** descripción, materia, fecha límite, prioridad, estado y archivos/enlaces futuros.
5. **Calendario:** clases, exámenes, entregas, eventos y recordatorios.
6. **Horario:** vista semanal por día y bloques horarios, con aula y materia.
7. **Calificaciones:** evaluaciones parciales, ponderaciones, calificación final y promedio simple/ponderado claramente identificado.
8. **Trayectoria:** materias del plan, prerrequisitos, créditos requeridos, aprobados y pendientes.
9. **Planificador de estudio:** objetivos semanales, sesiones de enfoque y registro de tiempo.
10. **Notas y recursos:** apuntes por materia, enlaces, bibliografía y materiales personales.
11. **Estadísticas:** evolución de calificaciones, distribución por materia, carga de trabajo y progreso.
12. **Preferencias y cuenta:** accesibilidad, tema, exportación y privacidad cuando exista backend.

## Criterios de diseño
- Responsive para móvil, tableta y escritorio.
- Accesibilidad por teclado, contraste suficiente y etiquetas comprensibles.
- Estados vacíos con instrucciones útiles.
- Confirmación antes de acciones destructivas.
- Formularios con validación y mensajes de error claros.
- No mostrar datos ficticios como si fueran registros oficiales.

## Estado de implementación
El prototipo actual implementa panel, materias, tareas, calendario mensual, calificaciones básicas, trayectoria editable, perfil y tema. Los demás módulos están definidos para su implementación incremental. El prototipo almacena datos en localStorage; no debe utilizarse para información sensible ni asumirse sincronizado.
