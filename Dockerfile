FROM node:alpine as base

WORKDIR /app

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

CMD ["node", "./app.js"]
