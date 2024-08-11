# Proyecto Toolbox Test

Este proyecto utiliza Docker Compose para levantar dos subproyectos: uno para el backend (1_api) y otro para el frontend (2_front). Sigue las instrucciones a continuación para instalar las dependencias y ejecutar los contenedores.

**Nota:** Asegúrate de tener Docker y Docker Compose instalados en tu sistema antes de seguir estos pasos.

## Instalación y ejecución

1. Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias y levantar los contenedores:

```bash
./setup.sh
```

## Dar de baja los contenedores

Cuando hayas terminado de probar el proyecto, puedes dar de baja los contenedores ejecutando:
```bash
docker-compose down
```
