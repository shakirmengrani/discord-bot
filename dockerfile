FROM node:lts
RUN mkdir /bot
WORKDIR /bot
COPY . /bot
CMD [ "yarn start" ]