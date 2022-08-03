import React from 'react';
import PropTypes from 'prop-types';

// Calculator class coponent which is the container class for Result and Button class
class Calculator extends React.Component {
  render() {
    <div className="calculator-grid">
      <Result name="result" value="0" />
      <Button name="all-clear" value="AC" />
      <Button name="plus-minus" value="+/-" />
      <Button name="percent" value="%" />
      <Button name="zero" value="0" />
      <Button name="one" value="1" />
      <Button name="two" value="2" />
      <Button name="three" value="3" />
      <Button name="four" value="4" />
      <Button name="five" value="5" />
      <Button name="six" value="6" />
      <Button name="seven" value="7" />
      <Button name="eight" value="8" />
      <Button name="nine" value="9" />
      <Button name="divide" value="÷" />
      <Button name="multiply" value="x" />
      <Button name="subtract" value="-" />
      <Button name="add" value="+" />
    </div>;
  }
}


// Button class component
class Button extends React.Component {
  constructor({ name, value }) {
    super({ name, value });
    this.name = name;
    this.value = value;
  }

  render() {
    return <button type="button" id={this.name}>{this.value}</button>;
  }
}

Button.prototype = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Calculator;
