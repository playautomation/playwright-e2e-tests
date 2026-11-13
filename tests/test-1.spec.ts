import { test, expect } from '@playwright/test';
import { log } from './helpers/logger';

test('should Test incorrect and correct login', async ({ page }, testInfo) => {

  //console.log('>>>>>>>> CONFIG AT RUN TIME >>> ${JSON.stringify(testInfo.config)}');
  console.log('>>>>>>>> CONFIG AT RUN TIME >>> ${testInfo.config}');
  await log("log",'LAUNCHING THE URL')

  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await expect(page.locator('h1')).toBeVisible();

  await log("log",'MAKING THE APPOINTMENT')
  //login negative
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.locator('#login')).toContainText('Please login to make appointment.');
  await page.getByLabel('Password').fill('ThisIsNotApASSWORD');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');

  //screenshot at test level
  let fullPageShot = await page.screenshot({ fullPage: true});
  testInfo.attach("screenshot for incorrect login", {body: fullPageShot, contentType: "image/png"});


  //login positive
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('h2')).toContainText('Make Appointment');

  await log("info", 'Login is successful...........................')
});