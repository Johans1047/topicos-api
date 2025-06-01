FROM node:22-alpine AS build

WORKDIR /build

COPY index.html package*.json tsconfig.json vite.config.ts eslint.config.js /build/
COPY ./.env.production /build/
COPY ./public /build/public
COPY ./src /build/src

# Soporte para variable en tiempo de build
# ARG VITE_API_URL
# ENV VITE_API_URL=$VITE_API_URL

# Asegura que Vite lo detecte como producción
ENV NODE_ENV=production

RUN npm ci
RUN npm run build

FROM nginx:stable-alpine AS prod

COPY --from=build /build/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]