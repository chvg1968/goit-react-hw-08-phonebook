import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { List, Typography } from '@mui/material';
import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const contactList = filterContacts();
  const renderContacts = contacts && contactList.length > 0;

  return (
    <>
      <List>
        {renderContacts &&
          contactList.map(({ id, name, number }) => (
            <ContactItem id={id} key={id} name={name} number={number} />
          ))}
        {isLoading && <Loader />}
        {error && (
          <Typography variant="h6" align="center">
            Try adding phone details or contact your administrator
          </Typography>
        )}
      </List>
    </>
  );
};

export default ContactList;
