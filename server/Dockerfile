FROM node:20-alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install 
RUN export NODE_TLS_REJECT_UNAUTHORIZED=0
COPY . .
CMD ["npm", "run", "start"]