FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# * is for also copying package-lock.json
COPY client/package*.json client/
RUN npm run install-client --omit=dev

COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

# For security purposes
USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000