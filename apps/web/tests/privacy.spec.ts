import { APP_NAME } from '@hey/data/constants';
import { expect, test } from '@playwright/test';
import { WEB_BASE_URL } from 'tests/constants';

test.beforeEach(async ({ page }) => {
  await page.goto(`${WEB_BASE_URL}/privacy`);
});

test('should have page title', async ({ page }) => {
  await expect(page).toHaveTitle(`Privacy Policy • ${APP_NAME}`);
});
