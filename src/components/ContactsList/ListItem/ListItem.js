import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};

export default ListItem;
