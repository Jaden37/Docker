# Creation d'une première image qui porte le nom "build"
FROM node:12.18.2 as build

# Création espace de travail
WORKDIR /app

# Copie des fichiers nécessaire à l'installation du code
COPY ./code/package.json /app/package.json
COPY ./code/package-lock.json /app/package-lock.json

# Instalation des modules nodes
RUN yarn install
# Copie des fichiers de code
COPY ./code/ .
# Lancement du build de l'application
RUN yarn build

FROM nginx:1.19.3
# Copie de la conf ngnix
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Depuis l'image précédante nommée "build" ont copie les fichiers
COPY --from=build /app/build /usr/share/nginx/html

# Lancement du server nginx
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80