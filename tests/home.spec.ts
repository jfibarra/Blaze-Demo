import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { CATEGORIES } from "../helpers/models";

test.describe('Home page', async function(){
    test.beforeEach(async({page, baseURL}) => {
        await page.goto(baseURL!);
    })

    test('Content wrapper is visible', async function({page}){
        const home = new HomePage(page);
        await expect(home.contentWrapper).toBeInViewport();
    })

    test('Home page has the correct categories', async function({page}){
        const home = new HomePage(page);
        await expect(home.categoriesWrapper).toBeInViewport();
        await expect(home.categoryOptions).toHaveText[CATEGORIES.phones, CATEGORIES.laptops, CATEGORIES.monitors];
    })

    test('Items are visible and contain the correct structure', async function({page}){
        const home = new HomePage(page);
        await expect(home.items).toHaveCount(9);
        for(const [index, item] of (await home.items.all()).entries()){
            await item.scrollIntoViewIfNeeded();
            await expect(item).toBeInViewport();
            await expect(home.itemNames.nth(index)).toContainText(/.+/);
            await expect(home.itemPrices.nth(index)).toContainText(/^\$?\d+$/);
            await expect(home.itemPrices.nth(index)).toBeVisible();
        }
    })
    
    test('The pagination buttons work', async function({page}){
        const home = new HomePage(page);
        await home.nextPaginationButton.click();
        await expect(home.nextPaginationButton).not.toBeInViewport();
        await home.previousPaginationButton.click();
        await expect(home.nextPaginationButton).toBeInViewport();
    })
})
