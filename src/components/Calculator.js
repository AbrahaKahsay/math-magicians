import React from 'react';
import Result from './Result';
import Button from './Buttons';
import './Calc.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <Result name="result" value="0" />

        <Button name="all-clear" value="AC" />
        <Button name="plus-minus" value="+/-" />
        <Button name="percent" value="%" />
        <Button name="divide" value="÷" />

        <Button name="seven" value="7" />
        <Button name="eight" value="8" />
        <Button name="nine" value="9" />
        <Button name="multiply" value="x" />

        <Button name="four" value="4" />
        <Button name="five" value="5" />
        <Button name="six" value="6" />
        <Button name="subtract" value="-" />

        <Button name="one" value="1" />
        <Button name="two" value="2" />
        <Button name="three" value="3" />
        <Button name="add" value="+" />
        <Button name="zero" value="0" />
        <Button name="dot" value="." />
        <Button name="equals" value="=" />
      </div>
    );
  }
}

export default Calculator;
