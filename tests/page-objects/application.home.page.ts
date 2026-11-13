import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page.js";
import { log } from "../helpers/logger.js";

export default class HomePage extends BasePage {
  //constructor
  constructor(page: Page) {
    super(page);
  }

  //Elements

  get userNameField() {
    return this.page.getByLabel("Username");
  }
  get passwordField() {
    return this.page.getByLabel("Password");
  }
  get appointmentLink() {
    return this.page.getByRole("link", { name: "Make Appointment" });
  }
  get loginButton() {
    return this.page.getByRole("button", { name: "Login" });
  }

  //Actions

  async NavigateAndClickAppointmentLink(url: string) {
    await log("info", "CLICK APPOINTMENT LINK");
    await this.navigateTo(url);
    await this.click(this.appointmentLink)
  }

  async LogintoApplication(username: string, password: string) {
    await this.typeInto(this.userNameField, username);
    await this.typeInto(this.passwordField, password);
    await this.click(this.loginButton);
  }
}