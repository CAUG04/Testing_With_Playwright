import { Locator, Page, expect } from '@playwright/test'

export class LoginPage {
    private readonly page: Page;
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    private readonly shoppingCartIcon: Locator

    constructor(page: Page) {
        this.page = page;
        this.usernameTextbox = page.getByRole('textbox', { name: 'Username' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.shoppingCartIcon = page.locator("xpath=//*[@id='shopping_cart_container']/a")
    }

    async goto() {
        await this.page.goto('https://saucedemo.com/');
    }

    async fillUsername(username: string) {
        await this.usernameTextbox.fill(username)
    }

    async fillPassword(password: string) {
        await this.passwordTextbox.fill(password)
    }
    async clickOnLogin() {
        await this.loginButton.click()
    }

    async loginWithCredencials(username: string, password: string) {
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }

    async checkSuccessfulLogin() {
        await expect(this.shoppingCartIcon).toBeVisible()
    }
}