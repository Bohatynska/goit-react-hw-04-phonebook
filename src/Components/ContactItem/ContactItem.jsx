import {
  ContactItem,
  Name,
  Number,
  DeleteButton,
} from 'Components/ContactItem/ContactItem.styled';

const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <ContactItem>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        Delete contact
      </DeleteButton>
    </ContactItem>
  );
};
export default ContactListItem;
