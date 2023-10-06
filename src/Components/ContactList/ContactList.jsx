import { ContactWrap, ContactUl } from './ContactList.styled';
import ContactListItem from 'Components/ContactItem/ContactItem';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactWrap>
      <ContactUl>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          />
        ))}
      </ContactUl>
    </ContactWrap>
  );
};

export default ContactList;
