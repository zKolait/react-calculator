import CalculatorCore from '../../utils/CalculatorCore'



// Test for addition
test('Should return the correct math for 5 + 3', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("5+3")

    expect(result.value).toBe(8)
})


// Test for subtraction
test('Should return the correct math for 5 - 3', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("5-3")

    expect(result.value).toBe(2)
})


// Test for multiplication
test('Should return the correct math for 5 * 3', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("5*3")

    expect(result.value).toBe(15)
})


// Test for division
test('Should return the correct math for 6 / 3', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("6/3")

    expect(result.value).toBe(2)
})



// Test for sqrt
test('Should return the correct math for √(4)', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("√(4)")

    expect(result.value).toBe(2)
})



// Test for pow
test('Should return the correct math for 2^2', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("2^2")

    expect(result.value).toBe(4)
})




// Test for expression with parentheses
test('Should return the correct math for 4(5)', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("4(5)")

    expect(result.value).toBe(20)
})




// Test for complex expression
test('Should return the correct math for 4*3(2/5)+2*(-3)^8-√(4)', () => {
    let calculator = new CalculatorCore()

    let result = calculator.calculateExpression("4*3(2/5)+2*(-3)^8-√(4)")

    expect(result.value).toBe(13124.8)
})


