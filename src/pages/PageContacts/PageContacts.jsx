import { Typography } from '@mui/material';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { styled } from '@mui/system';

const PageContactSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  maxWidth: '400px',
  margin: '0 auto', 
  backgroundColor:'#0099',
  marginTop: '2rem',
});

const PageContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#3999f3', 
}));

function PageContacts() {
  return (
    <PageContactSection>
      <PageContactTitle>PHONEBOOK ☎️</PageContactTitle>
      <Typography variant="h5" component="h2" marginBottom="1rem">
        Add new contact
      </Typography>
      <ContactForm />

      <Typography variant="h5" component="h2" marginBottom="1rem">
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </PageContactSection>
  );
}

export default PageContacts;
