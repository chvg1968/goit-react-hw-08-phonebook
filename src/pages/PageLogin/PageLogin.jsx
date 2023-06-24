import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const PageLoginSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '2rem auto',
  padding: '2rem',
  maxWidth: '400px',
  backgroundColor: '#5d93f0',
  borderRadius: '8px',
});

const PageLoginTitle = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#333',
  textAlign: 'center',
});

const PageHomeLabel = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
});

const PageHomeInput = styled(TextField)({
  backgroundColor: '#5d93f0',
});

const PageHomeBtn = styled(Button)({
  marginTop: '1rem',
  color:'#bdde29',
  fontSize: '1.5rem'
});

function PageLogin() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });
  };

  const { email, password } = form;

  return (
    <PageLoginSection>
      <PageLoginTitle><b>Please enter your email and password</b></PageLoginTitle>
      <form onSubmit={handleSubmit}>
        <PageHomeLabel>
          Email
          <PageHomeInput
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </PageHomeLabel>
        <PageHomeLabel>
          Password
          <PageHomeInput
            type="password"
            name="password"
            title="Enter your password"
            required
            value={password}
            onChange={handleChange}
          />
        </PageHomeLabel>
        <PageHomeBtn type="submit">Log In➡️</PageHomeBtn>
      </form>
    </PageLoginSection>
  );
}

export default PageLogin;

