FROM node:18

# dumb-init is a minimal process manager. We use it to ensure that signals from `docker stop` etc are properly handled.
# https://github.com/Yelp/dumb-init
# Without this, `docker stop` will take a long time to complete and eventually kills the app ungracefully.
# This isn't a big problem for a simple bot but it can result in data corruption if the bot writes to files
RUN DEBIAN_FRONTEND=noninteractive apt update && apt -y install dumb-init
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
