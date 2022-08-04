import React from 'react';
import PropTypes from 'prop-types';

// Button class component
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick(){
    const {handleBtnClick, value} = this.props;
    handleBtnClick(value);
  }

  render() {
    const {name, value}=this.props;
    return <button type="button" id={this.name} onClick={this.handleBtnClick}>{this.value}</button>;
  }
}

Button.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
