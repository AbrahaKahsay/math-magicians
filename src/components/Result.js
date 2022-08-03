import React from "react";
import PropTypes from 'prop-types';

class Result extends React.Component {
    constructor({ name, value }) {
      super({ name, value });
      this.name = name;
      this.value = value;
    }
  
    render() {
      return <div id={this.name}>{this.value}</div>;
    }
  }
  
  Result.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  export default Result;
  