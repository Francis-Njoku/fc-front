#Dockerfile

#FROM node:13.12.0-alphine as build
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build
#production environment
#FROM nginx:stable-alphine
#COPY --from=build /app/build /usr/share/nginx/html/
#COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 90
#EXPOSE 3001
#CMD ["nginx", "-g", "daemon off;"]

FROM node:alpine

WORKDIR /app
# install app dependencies
COPY package.json /app

RUN npm install

# add app
COPY . /app
EXPOSE 3000

# start app
CMD ["npm", "start"]