#!/bin/bash

# Instalar dependencias del backend
echo "Instalando dependencias del backend..."
cd 1_api
npm install
cd ..

# Instalar dependencias del frontend
echo "Instalando dependencias del frontend..."
cd 2_front
npm install
cd ..

# Levantar los contenedores
echo "Levantando los contenedores..."
docker-compose up --build
