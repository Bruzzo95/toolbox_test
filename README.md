# Proyecto Toolbox Test

Este proyecto utiliza Docker Compose para levantar dos subproyectos: uno para el backend (**`1_api`**) y otro para el frontend (**`2_front`**). Sigue las instrucciones a continuación para instalar las dependencias y ejecutar los contenedores.

**Nota:** Asegúrate de tener Docker y Docker Compose instalados en tu sistema antes de seguir estos pasos. Si vas a correr la aplicación en Docker Desktop (Windows), debes ejecutar el comando con Git Bash. Si quieres usar PowerShell, sigue las instrucciones a continuación.

## Instalación y ejecución

### Con Git Bash (Recomendado)

1. Ejecuta el siguiente comando para instalar las dependencias y levantar los contenedores:

    ```bash
    ./deploy.sh
    ```

### Con PowerShell

1. Ejecuta el script utilizando WSL (Windows Subsystem for Linux):

    ```powershell
    wsl bash ./deploy.sh
    ```

    Si `deploy.sh` está en una ubicación diferente o si el archivo tiene problemas de formato, asegúrate de ajustar la ruta y verificar el formato del archivo en WSL.

## Dar de baja los contenedores

Cuando hayas terminado de probar el proyecto, puedes dar de baja los contenedores ejecutando:

    ```bash
    docker-compose down
    ```

## Puertos

- **API**: [http://localhost:5000/](http://localhost:5000/)
- **Frontend**: [http://localhost:3000/](http://localhost:3000/)

## Pruebas

### API

- Obtener todos los datos de los archivos correctos: [http://localhost:5000/files/data/](http://localhost:5000/files/data/)
- Obtener el listado de los archivos: [http://localhost:5000/files/list/](http://localhost:5000/files/list/)
- Obtener los datos de un archivo en específico: [http://localhost:5000/files/data?fileName=test1.csv](http://localhost:5000/files/data?fileName=test1.csv)

### Front

- Obtener todos los datos de los archivos correctos: [http://localhost:3000/](http://localhost:3000/)
- Obtener los datos de un archivo en específico: [http://localhost:3000/?fileName=test3.csv](http://localhost:3000/?fileName=test3.csv)
