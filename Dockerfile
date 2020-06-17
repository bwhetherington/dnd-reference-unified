FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN git submodule update --init &&\
    npm install

EXPOSE 8080
CMD ["npm", "start"]