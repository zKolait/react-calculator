import React from 'react'



class CalculatorScreen extends React.Component {
    // Render
    render () {
        return (
            <div className="calculator-displayer">
                <p>{this.props.expression}</p>
                <p>{this.props.value}</p>
            </div>
        )
    }
}




export default CalculatorScreen