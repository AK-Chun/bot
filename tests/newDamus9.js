const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

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
    await page.locator('#input-editable').fill('Damus 微信交流群\n 进来互关，互相帮助学习 \nhttps://i.postimg.cc/tCxtpNKg/bd23cb7b17d504c994d2d6044f93c31.jpg');
    await page.getByRole('button').filter({ hasText: 'send' }).click();
    await wait(3000);
    browser.close();
  }
})();

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};