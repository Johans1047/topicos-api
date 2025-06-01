FROM node:22-alpine AS build

WORKDIR /build

COPY package*.json tsconfig.json /build/

RUN npm ci

COPY ./src /build/src

RUN npm run build


FROM node:22-alpine AS prod

WORKDIR /app

COPY --from=build /build/dist ./dist
COPY --from=build /build/package.json ./package.json
COPY --from=build /build/package-lock.json ./package-lock.json

# ARG NODE_ENV
# ARG DB_HOST
# ARG DB_PORT
# ARG DB_NAME
# ARG DB_USER
# ARG DB_PASS

# ENV NODE_ENV=$NODE_ENV
# ENV DB_HOST=$DB_HOST
# ENV DB_PORT=$DB_PORT
# ENV DB_NAME=$DB_NAME
# ENV DB_USER=$DB_USER
# ENV DB_PASS=$DB_PASS

ENV NODE_ENV=production 
ENV DB_HOST=testserver1047.database.windows.net
ENV DB_PORT=1433
ENV DB_NAME=testdb2
ENV DB_USER=useradmin
ENV DB_PASS=YS7hudud7SG3UJS

RUN npm ci

EXPOSE 3000
CMD ["node", "dist/main.js"]