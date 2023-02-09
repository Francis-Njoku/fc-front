#Dockerfile
FROM node:15.13-alpine
WORKDIR /fc-front
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]

#FROM node:14 as builder
#WORKDIR /app
#COPY package.json .
#RUN npm install
#COPY . .
#RUN npm run build
#production environment
#FROM nginx
#EXPOSE 80
#COPY --from=builder /app/build /usr/share/nginx/html


#FROM node:19-alpine3.16 as build
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build
#production environment
#FROM nginx:1.23.3-alpine
#COPY --from=build /app/build /usr/share/nginx/html/
#COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#EXPOSE 3001
#CMD ["nginx", "-g", "daemon off;"]

#FROM node:alpine

#WORKDIR /app
# install app dependencies
#COPY package.json /app

#RUN npm install

# add app
#COPY . /app
#EXPOSE 3000

# start app
#CMD ["npm", "start"]