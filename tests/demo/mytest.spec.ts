import { test, expect } from "@playwright/test";
import { homedir } from "os";
import { title } from "process";

test("Should load homepage with correct title", async ({ page }) => {
  // go to home
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  // assert title
  await expect(page).toHaveTitle("CURA Healthcare Service");
  // assert header text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});