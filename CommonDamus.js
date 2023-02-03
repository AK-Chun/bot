const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.
const { imgs, texts } = require('./config');
const arguments = process.argv;

(async () => {
    const browser = await chromium.launch({
      headless: true
    });  // Or 'chromium' or 'webkit'.
    // Create a new incognito browser context.
    const context = await browser.newContext();
    let flag = 1;
    // Create a new page in a pristine context.
    const page = await context.newPage();
    await page.goto('https://astral.ninja/', {
      timeout: 0
    });
    if(flag === 1) {
      await page.getByRole('button', { name: 'generate keys' }).click();  
      await page.getByRole('button', { name: 'proceed' }).click();
      await page.waitForTimeout(1000);
      await page.getByRole('button', { name: 'Close' }).click();
      flag++;
    }
    while(true) {
      await page.getByRole('button', { name: 'post' }).click();
      await page.locator('#input-editable').click();
      await page.locator('#input-editable').fill(`${texts[arguments[2]]} \n${imgs[arguments[2]]}`);
      await page.getByRole('button').filter({ hasText: 'send' }).click();
      await wait(6000);
    }
    // await browser.close();
})();

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};