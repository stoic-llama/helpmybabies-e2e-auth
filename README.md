# Steps to set up this app on a droplet

1. Go to your directory where you store all apps, and `git clone https://github.com/stoic-llama/helpmybabies-e2e-auth.git`.
2. Then set up dependencies by `npm i puppeteer` and `npm i -g pm2`.
3. Then set up all operating system dependencies for puppeteer that Linux Debian needs. Refer to this [link](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-doesnt-launch-on-linux). For each dependency, you will need to do an `apt install <dependency name>` to install on the droplet.
4. Now start up the app by going to the folder where the app is and `npm run start` to start up app with pm2.
5. Check if app is alive by going to a browser on your local laptop and `http://104.236.196.52:9000/api/v1/healthcheck` and you should get a JSON response like so: 
    ```json
        {   "name":"helpmybabies-e2e-auth",
            "message":"UP",
            "uptime":"28 seconds",
            "timestamp":"2024-06-13 06:24:16"
        }
    ```