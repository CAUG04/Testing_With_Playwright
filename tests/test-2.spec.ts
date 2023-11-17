import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://listado.mercadolibre.com.co/');
  await page.getByPlaceholder('Buscar productos, marcas y más…').click();
  await page.getByPlaceholder('Buscar productos, marcas y más…').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y más…').press('Enter');
  await page.locator('a').filter({ hasText: 'Apple iPhone 11 (128 GB) - Negro - Distribuidor autorizado' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});