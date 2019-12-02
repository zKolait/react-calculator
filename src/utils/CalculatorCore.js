import { Calculator } from 'antlr-calculator';


// Calculator class
export default class CalculatorCore {
    // Constructor
    constructor(expression = '') {
        // Expression
        this.expression = expression
        this.replaceKeys = {
            'π': 'PI',
            '√': 'SQRT'
        }
    }


    // Calculate expression
    calculateExpression(expression) {
        // Is the expression valid ?
        // Convert in viable format the string
        // Create formated expression
        let formatedExpression = this.formatExpression(expression, 0)

        // Set result from calcul expression
        let result = Calculator.calculate(formatedExpression)

        // Set human expression
        this.expression = expression

        // If expression is valid
        if (result.isValid) {
            // Return result
            return { expression: this.expression, message: ``, value: result.result, success: true }
        } else {
            // Return error invalid syntax
            return { expression: this.expression, message: 'Invalid syntax.', value: ``, success: false }
        }
    } 


    // Convert string in right format
    formatExpression(expression, type) {
        // Convert for calcul
        if (type === 0) {
            Object.keys(this.replaceKeys).forEach((key) => {
                if (expression.includes(key)) {
                    expression = expression.replace(key, this.replaceKeys[key])
                }
            })
        // Convert for human
        } else {
            Object.keys(this.replaceKeys).forEach((key) => {
                if (expression.includes(this.replaceKeys[key])) {
                    expression = expression.replace(this.replaceKeys[key], key)
                }
            })
        }

        return expression
    }
}
