import React from 'react'




class CalculatorPad extends React.Component {
    render () {
        return (
            <div className="calculator-pad-container">

                <div className="calculator-pad-item ans" onClick={() => this.props.onAns()}>
                    <p>ANS</p>
                </div>
                <div className="calculator-pad-item"></div>
                <div className="calculator-pad-item clear" onClick={() => this.props.onDelete()}>
                    <p>CE</p>
                </div>
                <div className="calculator-pad-item clear-all" onClick={() => this.props.onClear()}>
                    <p>C</p>
                </div>

                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('7')}>
                    <p>7</p>
                </div>
                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('8')}>
                    <p>8</p>
                </div>
                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('9')}>
                    <p>9</p>
                </div>
                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('^')}>
                    <p>^</p>
                </div>

                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('4')}>
                    <p>4</p>
                </div>
                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('5')}>
                    <p>5</p>
                </div>
                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('6')}>
                    <p>6</p>
                </div>
                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('*')}>
                    <p>*</p>
                </div>

                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('1')}>
                    <p>1</p>
                </div>
                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('2')}>
                    <p>2</p>
                </div>
                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('3')}>
                    <p>3</p>
                </div>
                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('/')}>
                    <p>/</p>
                </div>

                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('√(')}>
                    <p>√</p>
                </div>
                <div className="calculator-pad-item number" onClick={() => this.props.onPadClick('0')}>
                    <p>0</p>
                </div>
                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('+')}>
                    <p>+</p>
                </div>
                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('-')}>
                    <p>-</p>
                </div>

                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('(')}>
                    <p>(</p>
                </div>
                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick(')')}>
                    <p>)</p>
                </div>
                <div className="calculator-pad-item symbol" onClick={() => this.props.onPadClick('.')}>
                    <p>.</p>
                </div>
                <div className="calculator-pad-item result" onClick={() => this.props.onSubmit()}>
                    <p>=</p>
                </div>

            </div>
        )
    }
}





export default CalculatorPad