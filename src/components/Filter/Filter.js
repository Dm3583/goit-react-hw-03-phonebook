import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, handleInput }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleInput} name="filter" value={value} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
};

export default Filter;
