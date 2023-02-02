const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.
const arguments = process.argv;

const imgs = {
  "10": "https://i.postimg.cc/cH2rsmLm/f6de4fc0424b2233bf5fe660525b650.jpg",
  "11": "https://i.postimg.cc/bYmmRSFR/0fcf1eb2b65c36ed8afd0fa339b3e8c.jpg",
  "12": "https://i.postimg.cc/j2DPc2L8/91380e565cefcb39b8e3bbd05384142.jpg",
  "13": "https://i.postimg.cc/YS8FwYFn/f525f1faf989565ba0607891dee4440.jpg"
};

(async () => {
  while(true) {
    const browser = await chromium.launch({
      headless: true
    });  // Or 'chromium' or 'webkit'.
    // Create a new incognito browser context.
    const context = await browser.newContext();
    let flag = 1;
    // Create a new page in a pristine context.
    const page = await context.newPage();
    await page.goto('https://astral.ninja/');
    if(flag === 1) {
      await page.getByRole('button', { name: 'generate keys' }).click();
      await page.getByRole('button', { name: 'proceed' }).click();
      await page.getByRole('button', { name: 'Close' }).click();
      flag++;
    }
    await page.getByRole('button', { name: 'post' }).click();
    await page.locator('#input-editable').click();
    await page.locator('#input-editable').fill(`Damus 微信交流群\n 进来互关，互相帮助学习 \n${imgs[arguments[2]]}`);
    await page.getByRole('button').filter({ hasText: 'send' }).click();
    await wait(3000);
    browser.close();
  }
})();

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};