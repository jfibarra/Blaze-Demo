import { Base } from "./basePage";



export class HomePage extends Base{
    contentWrapper           = this.page.getByTestId('contcont');                   //using pw locators
    categoriesWrapper        = this.page.locator('div.list-group');                 //using css selector
    categoryOptions          = this.page.locator('a[id="itemc"]');                  //using css selector
    items                    = this.page.locator('div[id="tbodyid"] > div');        //using css selector
    itemNames                = this.page.locator('h4.card-title');                  //using css selector
    itemPrices               = this.page.locator('//h5[contains(text(),"$")]');     //using xpath
    itemDescriptions         = this.page.locator('//p[@id="article"]');             //using xpath
    nextPaginationButton     = this.page.locator('button', {hasText: "Next"});      //using pw locators
    previousPaginationButton = this.page.locator('button', {hasText: "Previous"});  //using pw locators
}