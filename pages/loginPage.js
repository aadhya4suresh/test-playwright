import { expect, test } from "@playwright/test";

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.textHeader = page.locator('p[class="welcomeMessage"]');
        this.emailField = page.locator('#userEmail');
        this.passwordField = page.locator('#userPassword');
        this.forgotButton = page.locator('.forgot-pswd');
        this.loginButton = page.locator('[type="submit"]');
        this.hamburger = page.locator('.hamburger-icon');
    }

    async launchAndVerifyUrl(url) {
        await test.step('launch and verify the url', async () => {
            await this.page.goto(url);
            const currentURL = await this.page.url();
            expect(currentURL).toEqual(url);
        })
    }

    async enterCredentials(username, password) {
        await test.step('Enter credentials', async () => {
            await expect(this.emailField).toBeVisible();
            await this.emailField.fill(username);

            await expect(this.passwordField).toBeVisible();
            await this.passwordField.fill(password);

            await expect(this.emailField).toHaveValue(username);
            await expect(this.passwordField).toHaveValue(password);
        });
    }

    async clickOnLoginButton() {
        await test.step('Click on login button', async () => {
            await this.loginButton.click();
        });
    }

    async verifyPageHeader(expectedHeaders) {
        await test.step('Verify page headers', async () => {
            await expect(this.hamburger).toBeAttached();
            const actualHeaders = await this.page.$$eval(
                '.remove-line-nav-item p',
                (elements) => elements.map((el) => el.innerText.trim())
            );
            for (const header of expectedHeaders) {
                expect(actualHeaders).toContain(header);
            }
        });
    }

    async clickOnModule(moduleName) {
        await test.step(`Click on module: ${moduleName}`, async () => {
            const module = this.page.locator(`xpath=//*[@class="left-nav-bar large expand-menu"]//following-sibling::*[text()="${moduleName}"]`);
            await expect(module).toBeVisible();
            await module.click();
        });
    }
}
