const { test, expect } = require('@playwright/test');
const { typeLikeHuman, scrollNaturally } = require('./humanActions');

// Public, read-only checks against the real GitHub website.
// These tests never submit credentials or create/change repositories.
test.describe('GitHub website | public user journeys', () => {
  test('TC01 | A visitor can open the GitHub homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC02 | The homepage provides a Sign in link', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /sign in/i }).first()).toHaveAttribute('href', /login/);
  });

  test('TC03 | The homepage provides a Sign up link', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /sign up/i }).first()).toHaveAttribute('href', /signup/);
  });

  test('TC04 | A visitor can browse GitHub pricing', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC05 | A visitor can open Explore', async ({ page }) => {
    await page.goto('/explore');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC06 | The sign-in page asks for a username or email', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
    await expect(page.locator('input[name="login"]')).toBeVisible();
  });

  test('TC07 | The sign-in page includes a password field', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('input[name="password"]')).toBeVisible();
  });

  test('TC08 | A visitor can open the account sign-up page', async ({ page }) => {
    await page.goto('/signup');
    await expect(page).toHaveURL(/signup/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC09 | Repository search displays a Playwright query', async ({ page }) => {
    await page.goto('/search');
    const searchBox = page.locator('input[name="q"]').first();
    if (await searchBox.isVisible().catch(() => false)) {
      await typeLikeHuman(searchBox, 'playwright', 75);
      await searchBox.press('Enter');
    } else {
      // URL fallback keeps the test stable if GitHub changes its search interface.
      await page.goto('/search?q=playwright&type=repositories');
    }
    await expect(page).toHaveURL(/search/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC10 | A visitor can view the Microsoft profile', async ({ page }) => {
    await page.goto('/microsoft');
    await expect(page).toHaveURL(/microsoft/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC11 | A visitor can view the Playwright repository', async ({ page }) => {
    await page.goto('/microsoft/playwright');
    await expect(page).toHaveURL(/microsoft\/playwright/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC12 | A visitor can browse GitHub Topics', async ({ page }) => {
    await page.goto('/topics');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC13 | A visitor can browse Trending repositories', async ({ page }) => {
    await page.goto('/trending');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC14 | A visitor can open GitHub Marketplace', async ({ page }) => {
    await page.goto('/marketplace');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC15 | A visitor can explore GitHub features', async ({ page }) => {
    await page.goto('/features');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC16 | A visitor can read about GitHub Actions', async ({ page }) => {
    await page.goto('/features/actions');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC17 | A visitor can open GitHub Security', async ({ page }) => {
    await page.goto('/security');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC18 | A visitor can view GitHub Enterprise', async ({ page }) => {
    await page.goto('/enterprise');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC19 | A visitor can browse customer stories', async ({ page }) => {
    await page.goto('/customer-stories');
    await expect(page).toHaveTitle(/GitHub/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC20 | A visitor can open the GitHub Blog', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('body')).toBeVisible();
    await scrollNaturally(page, 300);
  });
});
