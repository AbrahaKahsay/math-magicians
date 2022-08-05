import React, {useState} from 'react';
import calculate from '../logic/calculate';

const Calculator = ()=> {
    const [state, setState] = useState({
      total: null,
      next: null,
      operation: null,
    });

    const total = state.total;
    const next = state.next;
    const operation = state.operation;
    
  btnClick = (event) => {
    setState((prevState) => calculate(prevState, event.target.textContent));
  };

  
  return (
    <div className="calculator-grid">
      <div id="result">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <button type="button" onClick={btnClick} id="all-clear">AC</button>
      <button type="button" onClick={btnClick} id="plus-minus">+/-</button>
      <button type="button" onClick={btnClick} id="percent">%</button>
      <button type="button" onClick={btnClick} id="divide">÷</button>

      <button type="button" onClick={btnClick} id="seven">7</button>
      <button type="button" onClick={btnClick} id="eight">8</button>
      <button type="button" onClick={btnClick} id="nine">9</button>
      <button type="button" onClick={btnClick} id="multiply">x</button>

      <button type="button" onClick={btnClick} id="four">4</button>
      <button type="button" onClick={btnClick} id="five">5</button>
      <button type="button" onClick={btnClick} id="six">6</button>
      <button type="button" onClick={btnClick} id="subtract">-</button>

      <button type="button" onClick={btnClick} id="one">1</button>
      <button type="button" onClick={btnClick} id="two">2</button>
      <button type="button" onClick={btnClick} id="three">3</button>
      <button type="button" onClick={btnClick} id="add">+</button>
      <button type="button" onClick={btnClick} id="zero">0</button>
      <button type="button" onClick={btnClick} id="dot">.</button>
      <button type="button" onClick={btnClick} id="equals">=</button>
    </div>
  );

}

export default Calculator;
