// jest.mock(`./http`)

const {loadTitle} = require(`./util`);

test(`Should print an upper case text`, () => {
    // expect(printTitle).toBe(`DELECTUS AUT AUTEM`)

    loadTitle().then(title => {
        expect(title).toBe(`DELECTUS AUT AUTEM`);
    })
});
