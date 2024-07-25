import { Items } from 'components/Items/Items';
import PropTypes from 'prop-types';

export const ContactList = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {filteredContacts.map(filteredContact => (
          <Items
            key={filteredContact.id}
            filteredContact={filteredContact}
            deleteContact={deleteContact}
          />
        ))}
      </tbody>
    </table>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
