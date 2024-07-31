# Proyecto Toolbox Test

Este proyecto utiliza Docker Compose para orquestar dos subproyectos: uno para el backend (`1_api`) y otro para el frontend (`2_front`). Sigue las instrucciones a continuación para instalar las dependencias y ejecutar los contenedores.

# Nota: 
Asegúrate de tener Docker y Docker Compose instalados en tu sistema antes de seguir estos pasos.

## Instalación de dependencias

1. Navega al directorio del backend e instala las dependencias:
    ```bash
    cd toolbox_test/1_api
    npm install
    ```

2. Navega al directorio del frontend e instala las dependencias:
    ```bash
    cd toolbox_test/2_front
    npm install
    ```

## Levantar los contenedores

1. Regresa al directorio raíz del proyecto:
    ```bash
    cd ..
    ```

2. Ejecuta el siguiente comando para construir y levantar los contenedores:
    ```bash
    docker-compose up --build
    ```

## Dar de baja los contenedores

Cuando hayas terminado de probar el proyecto, puedes dar de baja los contenedores ejecutando:
```bash
docker-compose down
