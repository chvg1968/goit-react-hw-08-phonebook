import { ListItem, ListItemText, Button, CircularProgress } from '@mui/material';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import { styled } from '@mui/system';

const ContactItemRoot = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  color: '#000'
}));

const DeleteButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id);
  };

  return (
    <ContactItemRoot>
      <ListItemText primary={`${name}: ${number}`} />
      <DeleteButton
        variant="contained"
        color="primary"
        disabled={isDeleting}
        onClick={handleDelete}
      >
        {isDeleting ? <CircularProgress size={20} /> : 'Delete'}
      </DeleteButton>
    </ContactItemRoot>
  );
}

export default ContactItem;
