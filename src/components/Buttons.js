import React from "react";
import PropTypes from 'prop-types';


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
  
  export default Button