FROM ghcr.io/puppeteer/puppeteer:latest

# create destination directory
RUN mkdir -p /home/app
COPY . /home/app

# set default dir so that next commands executes in /home/app dir
WORKDIR /home/app

# expose 9000 on container
EXPOSE 9000

CMD [ "npm", "run", "start" ]