FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN yarn 
COPY . /app
CMD ["yarn", "dev"]