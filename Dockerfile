FROM node:alpine

#cd app
WORKDIR /app

#copiar package.json
COPY ./package.json ./

#instalar dependencias
RUN npm install

#copiar index.js
COPY ./index.js ./index.js
COPY ./App.js ./App.js
COPY ./Config.js ./Config.js
COPY ./ProcessManager.js ./ProcessManager.js
COPY ./.env ./.env
COPY ./controllers ./controllers
COPY ./middlewares ./middlewares
COPY ./routes ./routes


#mandarlo a ejecutar
CMD ["npm", "run", "dev"]

EXPOSE 4000