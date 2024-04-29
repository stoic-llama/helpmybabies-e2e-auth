const puppeteer = require('puppeteer'); // v22.0.0 or later

async function delay(time) {
    return new Promise(async function(resolve) { 
        setTimeout(resolve, time)
    });
}

(async () => {
    const browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    const timeout = 20000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        const host = process.env.HOST
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
    }
    {
        const targetPage = page;
        await targetPage.click('span.navbar-toggler-icon');

        await delay(3000)
    }

    await browser.close();
})().catch(err => {
    console.error(err);
    process.exit(1);
});
