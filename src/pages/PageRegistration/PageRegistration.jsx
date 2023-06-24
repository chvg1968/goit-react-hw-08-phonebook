import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const PageRegistrationSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '2rem auto',
  padding: '2rem',
  maxWidth: '400px',
  backgroundColor: '#5d93f0',
  borderRadius: '8px',
});

const PageRegistrationTitle = styled('h1')({
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#333',
  textAlign: 'center',
});

const PageRegistrationLabel = styled('label')({
  display: 'block',
  marginBottom: '0.5rem',
});

const PageRegistrationInput = styled(TextField)({
  width: '100%',
});

const PageRegistrationBtn = styled(Button)({
  marginTop: '1rem',
  color:'#bdde29',
  fontSize: '1.5rem'
});

function PageRegistration() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <PageRegistrationSection>
      <PageRegistrationTitle>Please enter your registration details</PageRegistrationTitle>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PageRegistrationLabel>
              Name
              <PageRegistrationInput
                type="text"
                name="name"
                placeholder="Example John"
                required
                value={name}
                onChange={handleChange}
              />
            </PageRegistrationLabel>
          </Grid>
          <Grid item xs={12}>
            <PageRegistrationLabel>
              Email
              <PageRegistrationInput
                type="email"
                name="email"
                placeholder="Example user@mail.com"
                required
                value={email}
                onChange={handleChange}
              />
            </PageRegistrationLabel>
          </Grid>
          <Grid item xs={12}>
            <PageRegistrationLabel>
              Password
              <PageRegistrationInput
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}
              />
            </PageRegistrationLabel>
          </Grid>
        </Grid>
        <PageRegistrationBtn type="submit">Register➡️</PageRegistrationBtn>
      </form>
    </PageRegistrationSection>
  );
}

export default PageRegistration;
