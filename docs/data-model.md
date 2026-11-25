# Modelo de datos conceptual

Este modelo orienta la futura API Django/PostgreSQL. No implica que todas las tablas estén implementadas en el prototipo estático.

## Entidades
- **User:** identidad y credenciales gestionadas por Django.
- **StudentProfile:** usuario, nombre público, zona horaria y preferencias.
- **Institution:** universidad o institución.
- **Campus:** sede perteneciente a una institución.
- **Faculty:** facultad o escuela.
- **Career:** carrera perteneciente a una institución/facultad.
- **StudyPlan:** versión de plan, vigencia, créditos requeridos, fuente y estado de verificación.
- **PlanSubject:** materia dentro de un plan, clave, semestre sugerido y créditos.
- **Prerequisite:** relación entre materias del plan.
- **AcademicTerm:** periodo escolar con fechas de inicio y fin.
- **Enrollment:** estudiante, materia del plan, periodo y estado.
- **SubjectGroup:** grupo, docente, aula y horario asociado a una inscripción.
- **ScheduleBlock:** día, hora inicial/final, aula y grupo.
- **Assessment:** evaluación, ponderación y fecha.
- **Grade:** resultado de una evaluación o calificación final.
- **Task:** actividad, prioridad, vencimiento y estado.
- **CalendarEvent:** examen, clase, entrega o evento personal.
- **StudyGoal:** objetivo con periodo y progreso.
- **StudySession:** duración, materia y fecha.
- **Note:** apuntes privados asociados a materia.
- **Resource:** enlace o referencia bibliográfica asociada a materia.

## Relaciones y restricciones
- Un usuario tiene un perfil; un perfil puede mantener historial de trayectorias.
- Una carrera tiene múltiples versiones de plan.
- Un estudiante selecciona una versión de plan para calcular su progreso.
- Una inscripción pertenece a un estudiante y a un periodo.
- Una materia puede tener múltiples prerrequisitos dentro de la misma versión del plan.
- La ponderación de evaluaciones de una materia debe validarse para no exceder el 100%.
- Los bloques de horario deben validar hora final posterior a hora inicial.
- Toda entidad privada debe tener propietario o una relación verificable con el estudiante.
- Evitar duplicar la materia del plan y la materia inscrita en un periodo.

## Cálculos
- **Promedio simple:** suma de calificaciones válidas / número de calificaciones.
- **Promedio ponderado:** suma(calificación × créditos) / suma(créditos), solo cuando el reglamento académico lo permita.
- **Avance por créditos:** créditos de materias aprobadas / créditos requeridos del plan × 100.
- El avance por materias puede mostrarse aparte y no sustituye el avance por créditos.
- Los estados de aprobación y escalas deben configurarse según la institución.
