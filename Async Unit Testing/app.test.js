const {printTitle} = require(`./app`);

test(`Should print an upper case text`, () => {
    expect(printTitle).toBe(`DELECTUS AUT AUTEM`)
});