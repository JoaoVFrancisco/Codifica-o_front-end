const calculadora = require('./calculadora');

test('o valor retornado vai ser 68', () => {
expect(calculadora('+', [1,53,6,8] )).toBe(68);
})
test('o valor retornado vai ser 30', () => {
    expect(calculadora('+', [2,10,8,10] )).toBe(30);
    })
test('o valor retornado não deve ser 30', () => {
    expect(calculadora('+', [2,10,8,9] )).not.toBe(30);
    })
test('o valor retornado vai ser 54', () => {
    expect(calculadora('-', [1,-53,6,-8] )).toBe(54);
    })
test('o valor retornado vai ser 3', () => {
    expect(calculadora('-', [2,-2, 4, -1] )).toBe(-3);
    })
test('o valor retornado não deve ser -3', () => {
    expect(calculadora('-', [2,-2, 4, -1] )).not.toBe(3);
    })
test('o valor retornado vai ser 2544', () => {
    expect(calculadora('*', [1,53,6,8] )).toBe(2544);
    })
test('o valor retornado vai ser 0', () => {
    expect(calculadora('*', [1,1,1,0] )).toBe(0);
    })
test('o valor retornado não deve ser 0', () => {
    expect(calculadora('*', [1,1,1,0] )).not.toBe(1);
    })
test('o valor retornado vai dever ser um numero', () => {
    expect(calculadora('+', ["l", "o", "n", "a"] )).toBeUndefined;
    })
test('a operação deve existir na gama de possibilidades', () => {
    expect(calculadora('/', [1, 1, 1, 1] )).toBeUndefined;
    })
test('a calculadora deve dar um erro geral (em tudo)', () => {
    expect(calculadora('/', ["m", 1, "=", "w"] )).toBeUndefined;
    })
test('a calculadora deve estar vazia (null)', () => {
    expect(calculadora('/', [] )).toBeNull;
    })