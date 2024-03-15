function addition(a, b) {
    return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function division(a, b) {
    return a / b;
};

function multiplication(a, b) {
    return a * b;
};

addition(5, 8);
subtraction(15, 5);
division(10, 2);
multiplication(5, 5)

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

module.exports = {
    addition,
    subtraction,
    division,
    multiplication
};