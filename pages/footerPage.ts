import { Base } from "./basePage";

export default class FooterPage extends Base {
    aboutUsTitle            = this.page.locator('.grrrr').first();
    getInTouchTitle         = this.page.locator('.grrrr').last();
    productStoreLogo        = this.page.locator('h4 > img');
}