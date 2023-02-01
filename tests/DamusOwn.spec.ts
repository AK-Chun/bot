import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://astral.ninja/note13xu8ahju27sursgwj88zuvevv20js68dk46rqxkn6ny3r5pwru9sxmn0r7');
  await page.getByLabel('enter private key generate keys login entering private key means astral will automatically sign with your private key each time you post content').click();
  await page.getByLabel('enter private key generate keys login entering private key means astral will automatically sign with your private key each time you post content').dblclick();
  await page.getByLabel('enter private key generate keys login entering private key means astral will automatically sign with your private key each time you post content').fill('nsec1vluq8a9enku4vnvf5mxukm3y47xwx6hw582u6rsyam2anhh2x30q8w9t26');
  await page.getByRole('button', { name: 'proceed' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'post' }).click();
  await page.locator('#input-editable').click();
  await page.locator('#input-editable').fill('Damus 微信交流群\n 进来互关，互相帮助学习 \nhttps://i.postimg.cc/J0NbN75B/c904082dcf3f52ec9bc336f07e02335.jpg');
  await page.getByRole('button').filter({ hasText: 'send' }).click();
  await page.locator('.q-page > div:nth-child(3)').click();
});