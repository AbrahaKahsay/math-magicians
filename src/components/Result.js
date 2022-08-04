import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name, previous, operator, next, total } = this.props;

    return (<div id={name}>
      <span>{previous}</span>{' '}
      <span>{operator}</span>{' '}
      <span>{next}</span> {br}
      <span>{total}</span>
    </div>);
  }
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  previous: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default Result;
