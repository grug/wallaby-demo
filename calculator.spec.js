import Calculator from './calculator';

describe("Dave's cool calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("Can add one number to another", () => {
    const result = calculator.add(1, 1);

    expect(result).toBe(2);
  });

  it("Can subtract one number from another", () => {
    const result = calculator.subtract(1, 1);

    expect(result).toBe(0);
  });

  it("Can divide two numbers", () => {
    const result = calculator.divide(1, 1);

    expect(result).toBe(1);
  });

  it("Can multiply one number with another", () => {
    const result = calculator.multiply(1, 1);

    expect(result).toBe(1);
  });
});
