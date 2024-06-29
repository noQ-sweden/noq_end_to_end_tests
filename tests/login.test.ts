import { test, expect } from '@playwright/test';

const hostname: string = "user.host@test.nu";
const username: string = "user.user@test.nu";
const password: string = "P4ssw0rd_for_Te5t+User"


test('login failure wrong username', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    // Fill in username and password
    await page.locator('#username').fill("WrongUser@test.nu");
    await page.locator('#password').fill(password);

    // Click the login button.
    await page.locator('#login-button').click();

    // Expects page to have text Autentisering misslyckades.
    await expect(page.getByText('Autentisering misslyckades.')).toBeVisible();
});

test('login failure wrong password', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    // Fill in username and password
    await page.locator("[id='username']").fill(username);
    await page.locator("[id='password']").fill("WrongPassword");

    // Click the login button.
    await page.locator("[id='login-button']").click();

    // Expects page to have text Autentisering misslyckades.
    await expect(page.getByText('Autentisering misslyckades.')).toBeVisible();
});

test('user login success', async ({ page }) => {
    await page.goto('http://localhost:5173/');
  
    // Fill in username and password
    await page.locator("[id='username']").fill(username);
    await page.locator("[id='password']").fill(password);
  
    // Click the login button.
    await page.locator("[id='login-button']").click();
  
    // Expects page to have text TODO: User Page.
    await expect(page.getByText('TODO: User Page')).toBeVisible();
});

test('host login success', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Fill in username and password
  await page.locator("[id='username']").fill(hostname);
  await page.locator("[id='password']").fill(password);

  // Click the login button.
  await page.locator("[id='login-button']").click();

  // Expects page to have text TODO: Host Page.
  await expect(page.getByText('TODO: Host Page')).toBeVisible();
});