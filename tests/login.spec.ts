import test, { expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";

test('Login works properly', async function({page, baseURL}){
    const login = new LoginPage(page);
    await page.goto(baseURL!);
    const user = process.env.PW_USERNAME;
    const password = process.env.PW_PASSWORD;
    await login.login(user!, password!);
    await expect(login.navbarPage.userName).toHaveText(`Welcome ${user}`);
})