import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://astral.ninja/');
  await page.getByRole('button', { name: 'generate keys' }).click();
  await page.getByRole('button', { name: 'proceed' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'post' }).click();
  await page.locator('#input-editable').click();
  await page.locator('#input-editable').fill('Damus 微信交流群\n 进来互关，互相帮助学习 \nhttps://i.postimg.cc/tCxtpNKg/bd23cb7b17d504c994d2d6044f93c31.jpg');
  await page.getByRole('button').filter({ hasText: 'send' }).click();
});