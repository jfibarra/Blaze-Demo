import { Base } from "./basePage"
import NavbarPage from "./navbarPage"


export default class LoginPage extends Base {
    navbarPage = new NavbarPage(this.page);
    private usernameInput   = this.page.getByTestId('loginusername');
    private passwordInput   = this.page.getByTestId('loginpassword');
    private loginButton     = this.page.locator('//div[@class="modal-footer"]/button[contains(@class,"btn-primary")]').last();

    async login(username: string, password: string){
        if(!username || !password){
            throw new Error('Invalid credentials');
        }
        await this.navbarPage.loginButton.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}