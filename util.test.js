const {generateText, checkAndGenerate} = require(`./util`);
const puppeteer = require(`puppeteer`);

test(`Should output name and age`, () => {
    let text = generateText(`Max`, 29);
    expect(text).toBe(`Max (29 years old)`);

    text = generateText(``, null)
    expect(text).toBe(` (null years old)`)

});

test(`Should generate validate text output`, () => {
    let text = checkAndGenerate(`Max`, 29)
    expect(text).toBe(`Max (29 years old)`)
})

test(`should click around `, async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 220,
        args: [`--window-size=1920,1080`]
    })

    const page = await browser.newPage()
    await page.goto(`file:///Users/nawodyaishan/Documents/GitHub/WebDev-Js-Unit-Test-Jest-Demo/index.html`);

    await page.click(`input#name`);
    await page.type(`input#name`, `Anna`);
    await page.click(`input#age`);
    await page.type(`input#age`, `37`);
    await page.click(`#btnAddUser`);

    let finalText = await page.$eval(`.user-item`, el => el.textContent)
    expect(finalText).toBe(`Anna (37 years old)`);
});