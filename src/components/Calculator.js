import React, {useState} from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function

const Calculator = ()=> {
    const [state, setState] = useState({
      total: null,
      next: null,
      operation: null,
    });

  btnClick = (event) => {
    setState((prevState) => calculate(prevState, event.target.textContent));
  };

  render() {
    const {
      total,
      next,
      operation,
    } = this.state;
    return (
      <div className="calculator-grid">
        <div id="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <button type="button" onClick={this.btnClick} id="all-clear">AC</button>
        <button type="button" onClick={this.btnClick} id="plus-minus">+/-</button>
        <button type="button" onClick={this.btnClick} id="percent">%</button>
        <button type="button" onClick={this.btnClick} id="divide">÷</button>

        <button type="button" onClick={this.btnClick} id="seven">7</button>
        <button type="button" onClick={this.btnClick} id="eight">8</button>
        <button type="button" onClick={this.btnClick} id="nine">9</button>
        <button type="button" onClick={this.btnClick} id="multiply">x</button>

        <button type="button" onClick={this.btnClick} id="four">4</button>
        <button type="button" onClick={this.btnClick} id="five">5</button>
        <button type="button" onClick={this.btnClick} id="six">6</button>
        <button type="button" onClick={this.btnClick} id="subtract">-</button>

        <button type="button" onClick={this.btnClick} id="one">1</button>
        <button type="button" onClick={this.btnClick} id="two">2</button>
        <button type="button" onClick={this.btnClick} id="three">3</button>
        <button type="button" onClick={this.btnClick} id="add">+</button>
        <button type="button" onClick={this.btnClick} id="zero">0</button>
        <button type="button" onClick={this.btnClick} id="dot">.</button>
        <button type="button" onClick={this.btnClick} id="equals">=</button>
      </div>
    );
  }
}

export default Calculator;
