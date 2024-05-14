import { Base } from "./basePage";


export default class NavbarPage extends Base {
    userName    = this.page.getByTestId('nameofuser');
    loginButton = this.page.locator('a[data-target="#logInModal"]');
}