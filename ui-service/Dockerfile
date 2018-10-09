FROM node:10.4
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV HOST_IP=localhost
CMD sed -i -e 's#HOST_IP#'"$HOST_IP"'#g' services-controller.js && npm start
