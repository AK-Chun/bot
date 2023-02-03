const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.
const arguments = process.argv;

const imgs = {
  "blockChain" : "图片地址"
};

const texts = {
  "blockChain": "区块链xxxx",
};

(async () => {
  while(true) {
    const browser = await chromium.launch({
      headless: false
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
      await page.getByText('wss://nostr.zebedee.cloud').click();
      await page.getByText('wss://relay.damus.io').click();
      await page.getByText('wss://relay.nostr.info').click();
      await page.getByText('wss://nostr.bitcoiner.social').click();
      await page.getByText('wss://nostr-pub.semisol.dev').click();
      await page.getByText('wss://nostr-pub.wellorder.net').click();
      await page.getByText('wss://nostr.onsats.org remove').click();
      await page.getByText('wss://nostr-relay.wlvs.space').click();
      await page.getByText('wss://nostr.walletofsatoshi.com').click();      
      await page.getByRole('button', { name: 'proceed' }).click();
      await page.waitForTimeout(1000);
      await page.getByRole('button', { name: 'Close' }).click();
      flag++;
    }
      await page.getByRole('button', { name: 'post' }).click();
      await page.locator('#input-editable').click();
      await page.locator('#input-editable').fill(`${texts[arguments[2]]} \n${imgs[arguments[2]]}`);
      await page.getByRole('button').filter({ hasText: 'send' }).click();
      await wait(6000);
      await browser.close();
    }
})();

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};