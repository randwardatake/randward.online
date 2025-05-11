FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci
EXPOSE 3000
COPY . /usr/src/app
RUN chown -R node:node /usr/src/app
USER node
CMD ["node", "server.js"]