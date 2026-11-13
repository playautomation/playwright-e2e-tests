import {test, expect} from "@playwright/test"
import { log } from "../helpers/logger"
import HomePage from "../page-objects/application.home.page"

test("login to appointment site", async ({page}) => {

    // create a page object

    const homePage = new HomePage(page)

    await homePage.NavigateAndClickAppointmentLink("https://katalon-demo-cura.herokuapp.com/")
    await homePage.LogintoApplication("John Doe", "ThisIsNotAPassword")

})