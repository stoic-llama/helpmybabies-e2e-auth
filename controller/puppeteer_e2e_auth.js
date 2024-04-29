require('dotenv').config()
const puppeteer = require('puppeteer'); // v22.0.0 or later

const endToEndWrapper = async (req, res) => {
  try {
    await endToEnd()

    res.status(200).send("Success")
  }
  catch (err) {
    console.log(err)
    res.status(500).json({
      message: "something went wrong: " + err
    })
  }
}

const endToEnd = async () => {
  console.log("Starting e2e...")

      const browser = await puppeteer.launch({ 
        args: [ 
          '--no-sandbox', 
          '--disable-setuid-sandbox'
        ], 
        headless: true, 
        ignoreHTTPSErrors: true, 
      });
      // const browser = await puppeteer.launch();
      // const browser = await puppeteer.launch({ headless: false }); // default is true
      const page = await browser.newPage();
      const timeout = 20000;
      page.setDefaultTimeout(timeout);

      const targetPage = page;
      const host = process.env.HOST
      console.log("Going to " + host + '/user/lookup')

      await targetPage.goto(host + '/user/lookup');

      const inputFieldSelector = '#exampleInputEmail1'
      await targetPage.waitForSelector(inputFieldSelector);
      await targetPage.type(inputFieldSelector, 'Margot.Robbie@n.com');
      await targetPage.keyboard.down('Enter');
      await targetPage.keyboard.up('Enter');

      await delay(3000)
      
      const inputFieldSelector2 = '#inputPassword'
      await targetPage.waitForSelector(inputFieldSelector2);
      await targetPage.type(inputFieldSelector2, 'n');
      await targetPage.keyboard.down('Enter');
      await targetPage.keyboard.up('Enter');

      await delay(3000)
  
      const isGreetingCorrect = await targetPage.evaluate(() => {
          // Find the element with class .greeting
          const greetingElement = document.querySelector('.greeting');
          // Check if the element exists and its text content is "Hello Margot"
          return greetingElement && greetingElement.textContent.trim() === 'Hello Margot2';
      });
      
      if (isGreetingCorrect) {
          console.log('The greeting is correct: "Hello Margot"');
      } else {
          console.log('The greeting is incorrect or the element does not exist');
      }

      await delay(3000)

      // const targetPage = page;
      await targetPage.click('span.navbar-toggler-icon');

      await delay(3000)

      await browser.close();
};

async function delay(time) {
  return new Promise(async function(resolve) { 
      setTimeout(resolve, time)
  });
}

module.exports = {
  endToEndWrapper,
  endToEnd
}