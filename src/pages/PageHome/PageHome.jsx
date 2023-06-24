import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const PageHomeSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '2rem auto',
  padding: '2rem',
  maxWidth: '400px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
});

const PageHomeTitle = styled(Typography)({
  fontSize: '2rem',
  marginBottom: '1rem',
  color: '#333',
  textAlign: 'center',
});

const PageHomeTitle2 = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#666',
  textAlign: 'center',
});

const PageHomeText = styled(Typography)({
  fontSize: '1rem',
  marginBottom: '1rem',
  color: '#333',
  textAlign: 'center',
});

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <PageHomeSection>
      <PageHomeTitle>Welcome to your PhoneBook ☎️</PageHomeTitle>
      <PageHomeTitle2>Now don´t forget your contacts!</PageHomeTitle2>
      {!isLoggedIn && (
        <PageHomeText>
          Please, <b>Sign up</b> or <b>Log in</b> to have access to the Phonebook!
        </PageHomeText>
      )}
    </PageHomeSection>
  );
}

export default PageHome;
