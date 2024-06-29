import { test, expect } from '@playwright/test';

const hostname: string = "user.host@test.nu";
const username: string = "user.user@test.nu";
const password: string = "P4ssw0rd_for_Te5t+User"

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NoQ/);
});

/*
test('host login success', async ({ page }) => {
    await page.goto('http://localhost:5173/');
  
    // Fill in username and password

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
/*
test('empty username and password', async ({ page }) => {
    await page.goto('http://localhost:5173/');
  
  // Click the login button.
  await page.click("[id='login-button']");

  // Expects page to have a heading with the name of Installation.
//  await response.ok();
  await expect(page.getByText('Fyll i det här fältet.')).toBeVisible();
});
*/

test('login failure wrong username', async ({ page }) => {
  // Fill in username and password
  await page.locator("[id='username']").fill("WrongUser@test.nu");
  await page.locator("[id='password']").fill(password);

  // Click the login button.
  await page.locator("[id='login-button']").click();

  // Expects page to have text Autentisering misslyckades.
  await expect(page.getByText('Autentisering misslyckades.')).toBeVisible();
});

test('login failure wrong password', async ({ page }) => {
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
  
    // Expects page to have text Härbärget Oasen.
    await expect(page.getByText('Härbärget Oasen')).toBeVisible();
});