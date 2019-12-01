import React from 'react'
import CalculatorCore from '../utils/CalculatorCore'
import CalculatorScreen from './CalculatorScreen'
import CalculatorPad from './CalculatorPad'



// Component
class CalculatorMain extends React.Component {
    // State
    state = {
        calculator: new CalculatorCore(),
        expression: '',
        message: '',
        value: '',
        active: false,
        ans: ''
    }



    // On pad click
    onPadClick = (arg) => {
        // Set new expression
        let expression = this.state.expression + `${arg}`

        // Update state
        this.setState({
            expression,
            value: '',
            message: '',
            active: false
        })
    }



    // On pad click
    onAns = () => {
        // Set new expression
        let expression

        if (this.state.value !== '') {
            expression = this.state.ans
        } else {
            expression = this.state.expression + this.state.ans
        }

        // Update state
        this.setState({
            expression,
            value: '',
            message: '',
            active: false
        })
    }


    
    // On submit of input
    onSubmit = () => {
        // Get response
        let response = this.state.calculator.calculateExpression(this.state.expression)

        // Success
        if (response.success) {
            this.setState({
                expression: response.expression,
                message: response.message,
                value: response.value,
                active: true,
                ans: response.value
            })
        // Error
        } else {
            this.setState({
                message: response.message,
                value: 'ERROR',
                active: true
            })
        }
    }



    // On pad click
    onDelete = () => {
        // Delete one character
        let length = this.state.expression.length - 1
        let expression = ''

        // Remove x character from string
        if (this.state.expression[length] == 'N' || this.state.expression[length] == 'S') {
            expression = this.state.expression.slice(0, -3)
        } else {
            expression = this.state.expression.slice(0, -1)
        }

        // Update state
        this.setState({
            expression,
            value: '',
            active: false
        })
    }



    // On pad click
    onClear = () => {
        // Delete expression
        let expression = ''

        // Update state
        this.setState({
            expression,
            value: '',
            active: false
        })
    }



    // Render
    render () {
        return (
            <React.Fragment>
                <div className="calculator--display--container">
                    <CalculatorScreen
                        expression={this.state.expression}
                        message={this.state.message} 
                        value={this.state.value}
                        active={this.state.active} 
                    />
                </div>
                <CalculatorPad
                    onSubmit={(e) => this.onSubmit(e)}
                    onPadClick={this.onPadClick}
                    onDelete={this.onDelete}
                    onClear={this.onClear}
                    onAns={this.onAns}
                />
            </React.Fragment>
        )
    }
}



// Export
export default CalculatorMain