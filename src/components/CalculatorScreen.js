import React from 'react'


// Component
export default class CalculatorScreen extends React.Component {
    // Render
    render () {
        return (
            <div className="calculator-displayer">
                <p 
                    className="calculator-expression"
                >
                    {this.props.expression}
                </p>
                <p 
                    className="calculator-value"
                >
                    {this.props.value}
                </p>
            </div>
        )
    }
}