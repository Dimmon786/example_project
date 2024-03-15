const {view} = require('./View');

test('view', () => {
    expect(div).toBe('flex flex-col gap-4 items-center');
    expect(h1).toBe(`text-2xl`);
    expect(p).toBe(`text-2xl`);
    expect(button).toBE(`btnStyle`);
});