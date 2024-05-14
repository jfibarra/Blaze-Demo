import test, { expect } from "@playwright/test";
import FooterPage from "../pages/footerPage";

test.describe('Footer test', async function(){
    test.beforeEach(async({page, baseURL}) => {
        await page.goto(baseURL!);
    })

    test('Footer titles are correct', async function({page}) {
        const footer = new FooterPage(page);
        await expect(footer.aboutUsTitle).toHaveText('About Us');
        await expect(footer.getInTouchTitle).toHaveText('Get in Touch');
    })
    
    test('Footer logo is visible', async function({page}) {
        const footer = new FooterPage(page);
        await expect(footer.productStoreLogo).toBeVisible();
    })
})
