const {generateText, checkAndGenerate} = require(`./util`);

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