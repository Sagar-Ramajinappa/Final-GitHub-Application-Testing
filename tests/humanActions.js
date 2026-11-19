/**
 * Small helpers that make selected browser interactions feel less robotic.
 * They are intentionally simple and do not try to imitate a real person's identity.
 */
const { expect } = require('@playwright/test');

/** Type text character-by-character, with a short delay between keystrokes. */
async function typeLikeHuman(locator, text, delay = 90) {
  await expect(locator).toBeVisible();
  await locator.click();
  await locator.pressSequentially(text, { delay });
}

/** Move the pointer to an element before clicking it. */
async function clickLikeHuman(locator) {
  await expect(locator).toBeVisible();
  await locator.scrollIntoViewIfNeeded();
  await locator.hover();
  await locator.click();
}

/** Scroll down in small steps instead of jumping straight to the bottom. */
async function scrollNaturally(page, distance = 500, step = 120) {
  const direction = distance >= 0 ? 1 : -1;
  let remaining = Math.abs(distance);
  while (remaining > 0) {
    const amount = Math.min(step, remaining) * direction;
    await page.mouse.wheel(0, amount);
    remaining -= Math.abs(amount);
    await page.waitForTimeout(120);
  }
}

module.exports = { typeLikeHuman, clickLikeHuman, scrollNaturally };
