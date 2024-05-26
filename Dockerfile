FROM node:14

# Crear el directorio de la aplicación
WORKDIR /usr/src/app

# Instalar las dependencias de la aplicación
COPY package*.json ./
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 3000

# Ejecutar la aplicación
CMD [ "node", "index.js" ]
