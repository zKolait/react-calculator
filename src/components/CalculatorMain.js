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
                active: true
            })
        // Error
        } else {
            this.setState({
                message: response.message,
                value: '',
                active: true
            })
        }
    }



    // On pad click
    onClear = () => {
        // Update state
        this.setState({
            expression: '',
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
                    onClear={this.onClear}
                />
            </React.Fragment>
        )
    }
}



// Export
export default CalculatorMain