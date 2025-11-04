import { test, expect } from '@playwright/test';

test('home page renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('TextMaster')).toBeVisible();
  await expect(page.getByPlaceholder('Type or paste text here...')).toBeVisible();
});

