FROM node:17-alpine3.14

RUN mkdir -p /usr/src/myapp

WORKDIR /usr/src/myapp

COPY package.json /usr/src/myapp
RUN npm install

COPY . /usr/src/myapp

CMD ["npm", "start"]

EXPOSE 8000