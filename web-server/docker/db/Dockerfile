FROM mongo:latest

# Copie du fichier setup, qui sera éxécuté à l'initialisation de la BDD
COPY ./mongodb-setup.js /docker-entrypoint-initdb.d/

RUN apt-get update -y
RUN mkdir -p ./data/db

# MongoDB's default port
EXPOSE 27017