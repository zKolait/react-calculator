import React from 'react'



class CalculatorScreen extends React.Component {
    // Render
    render () {
        return (
            <div className="calculator-displayer">
                <p 
                    className={"calculator-expression " + ( !this.props.active ? "active" : "" ) }
                >
                    {this.props.expression}
                </p>
                <p 
                    className={"calculator-value " + ( this.props.active ? "active" : "" ) }
                >
                    {this.props.value}
                </p>
            </div>
        )
    }
}




export default CalculatorScreen