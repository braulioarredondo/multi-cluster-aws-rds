FROM node:20-alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install npm -g --ca=null
RUN npm config set ca=""
COPY . .
CMD ["npm", "run", "start"]