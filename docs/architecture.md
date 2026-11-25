# Arquitectura de University Hub

## 1. Visión general
University Hub es una plataforma de gestión académica personal, multiinstitución y multicarrera. El diseño separa presentación, lógica de negocio y persistencia para poder evolucionar del prototipo local a una aplicación multiusuario.

## 2. Capas
### Frontend
- HTML semántico, CSS responsive y JavaScript.
- Componentes y vistas por módulo.
- Validación de formularios en cliente como ayuda, nunca como única barrera de seguridad.
- Capa de servicios para consumir la API REST.
- Estado temporal de interfaz; caché local solo para preferencias y borradores no sensibles.
- Gráficas accesibles con etiquetas y alternativas tabulares.

### Backend
- Python, Django y Django REST Framework.
- API versionada bajo `/api/v1/`.
- Autenticación y autorización en servidor.
- Validación de propiedad: cada estudiante solo consulta y modifica sus propios registros.
- Reglas académicas centralizadas en servicios de dominio.

### Persistencia
- PostgreSQL.
- Migraciones versionadas.
- Claves foráneas, restricciones e índices.
- Fechas almacenadas con zona horaria y mostradas en la zona del usuario.

## 3. Dominios principales
- Identidad: usuario, perfil y preferencias.
- Instituciones: universidad, campus y facultad.
- Trayectoria: carrera, plan versionado, periodo/semestre y materias.
- Seriación: prerrequisitos y correquisitos.
- Actividad: inscripción, horario, tarea, examen, evento y recordatorio.
- Evaluación: calificación, ponderación y promedio.
- Aprendizaje: notas, sesiones de estudio, objetivos y recursos.
- Analítica: créditos aprobados, avance curricular y tendencias de calificación.

## 4. Reglas académicas
- Un plan pertenece a una carrera y tiene versión, vigencia y fuente verificable.
- La inscripción vincula al estudiante con una materia en un periodo concreto.
- Una materia del plan no equivale a una inscripción cursada.
- El avance se calcula con materias/créditos aprobados del plan seleccionado, no con cifras arbitrarias.
- El promedio debe indicar su método: simple o ponderado por créditos; no mezclar ambos.
- Los prerrequisitos se modelan como relaciones, no como texto libre.
- Los cambios de carrera o plan conservan el historial previo.

## 5. Seguridad y privacidad
- No guardar contraseñas en texto plano.
- Usar hash de contraseñas gestionado por Django.
- Aplicar permisos por objeto y protección CSRF.
- Validar y normalizar toda entrada en el servidor.
- No exponer secretos en el repositorio; usar variables de entorno.
- Minimizar datos personales y ofrecer exportación/eliminación de cuenta en la fase autenticada.
- Los datos académicos son privados por defecto.

## 6. Despliegue
- Prototipo estático: GitHub Pages desde la raíz del repositorio; `index.html` envía a `frontend/`.
- Producción futura: frontend estático + API Django + PostgreSQL, con HTTPS, copias de seguridad y monitoreo.
- Los secretos y credenciales nunca se incluyen en el frontend ni en Git.

## 7. Diagrama lógico
```text
Navegador
  └── Frontend responsive
       ├── Panel y navegación
       ├── Materias / tareas / calendario
       ├── Calificaciones / trayectoria
       └── Servicios HTTP
             └── API Django REST (/api/v1)
                  ├── Autenticación y permisos
                  ├── Servicios académicos
                  └── PostgreSQL
```
