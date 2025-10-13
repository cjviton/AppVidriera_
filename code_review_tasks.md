# Tareas propuestas

## Corrección tipográfica
- **Archivo:** `ApiConexSql/Data/AppDbContext.cs`
- **Descripción:** Corregir el salto de línea dentro del comentario que hoy muestra "bases de d\natos" para que la frase se lea como "bases de datos" sin el corte ortográfico.

## Corrección de fallo
- **Archivo:** `ApiConexSql/Program.cs`
- **Descripción:** Ajustar la configuración HTTPS (por ejemplo, ejecutando `app.UseHttpsRedirection()` solo fuera de entornos de desarrollo) porque el frontend consume la API mediante HTTP en `http://10.0.2.2:5297` y actualmente recibe una redirección a HTTPS con un certificado autofirmado para `localhost`, lo que provoca fallos de inicio de sesión y registro en los emuladores móviles.

## Comentario o documentación
- **Archivo:** `AppVidriera/screens/Register.js`
- **Descripción:** Actualizar el comentario que indica que se redirige a Home tras registrar un usuario, ya que el código realmente redirige a la pantalla de Login.

## Mejora de prueba
- **Archivo:** `ApiConexSql/Program.cs` (crear un proyecto de pruebas asociado)
- **Descripción:** Incorporar una prueba de integración que verifique que el endpoint `POST /register` guarda usuarios correctamente y que `GET /usuarios` los devuelve, ya que actualmente la solución no cuenta con coberturas automatizadas para estos flujos críticos.
