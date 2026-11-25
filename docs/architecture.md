# Arquitectura

- Presentación: frontend web responsive (HTML/CSS/JavaScript en MVP).
- API prevista: Python + Django REST Framework.
- Persistencia prevista: PostgreSQL.
- Dominio: estudiantes, universidades, carreras, planes versionados, materias, prerrequisitos, inscripciones, calificaciones, periodos, tareas y recursos.
- Seguridad: autenticación gestionada por backend; datos privados por defecto.

Cada estudiante se asocia a una versión específica del plan de estudios. El historial académico se conserva al cambiar de carrera o institución. Los prerrequisitos son relaciones estructuradas, no texto libre. No se etiquetará un plan como oficial sin verificar su fuente institucional.
