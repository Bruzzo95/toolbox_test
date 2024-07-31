# Imagen oficial de Node.js
FROM node:14

# Directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Exponer el puerto en el que la app estará corriendo
EXPOSE 5000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]
