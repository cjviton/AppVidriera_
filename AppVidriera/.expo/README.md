> Why do I have a folder named ".expo" in my project?

The ".expo" folder is created when an Expo project is started using "expo start" command.

> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.




¿Por qué tengo una carpeta llamada ".expo" en mi proyecto?

La carpeta ".expo" se crea al iniciar un proyecto Expo con el comando "expo start".

¿Qué contienen los archivos?

- "devices.json": contiene información sobre los dispositivos que han abierto este proyecto recientemente. Se utiliza para rellenar la lista de "Sesiones de desarrollo" en las compilaciones de desarrollo.
- "settings.json": contiene la configuración del servidor que se utiliza para servir el manifiesto de la aplicación.

¿Debo confirmar la carpeta ".expo"?

No, no debe compartir la carpeta ".expo". No contiene información relevante para otros desarrolladores que trabajan en el proyecto; es específica de su equipo.
Al crear el proyecto, la carpeta ".expo" ya se agrega a su archivo ".gitignore".