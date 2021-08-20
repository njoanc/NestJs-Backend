FROM node:lts

RUN apt-get update

WORKDIR /src
COPY ./package*.json ./
RUN npm ci
COPY . .
# RUN chown -R node:node /src
# USER node

EXPOSE 3000
EXPOSE 4000
EXPOSE 4003

CMD npm start