import Calculator from '../src/calculator';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  })

  it('can add two numbers together', () => {
    const result = calculator.add(1, 1);

    expect(result).toBe(2);
  });

  it('can subtract one number from another', () => {
    const result = calculator.subtract(2, 1);

    expect(result).toBe(1);
  });

  it('can divide one number by another', () => {
    const result = calculator.divide(4, 2);

    expect(result).toBe(2);
  });

  it('can multiple one number by another', () => {
    const result = calculator.multiply(2, 2);

    expect(result).toBe(4);
  });
});
