import PropTypes from 'prop-types';

export const Items = ({ filteredContact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <tr key={filteredContact.id}>
      <td>{filteredContact.name}</td>
      <td>{filteredContact.number}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

Items.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
