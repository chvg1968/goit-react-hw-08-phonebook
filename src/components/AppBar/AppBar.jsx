import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthForm from 'components/AuthForm';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { AppBar, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      paper: 'tu-color-aqui',
    },
  },
  // Otros estilos y configuraciones de tema aquí
});

const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

function CustomAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <ThemeProvider theme={theme}>
    <Header position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Navigation />
        </Box>
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </Toolbar>
    </Header>
    </ThemeProvider>
  );
}

export default CustomAppBar;
