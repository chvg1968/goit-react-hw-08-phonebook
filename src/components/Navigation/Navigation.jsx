import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { styled } from '@mui/system';

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--primaryTextColor);
  transition: all 0.5s ease; 

  &:not(:last-child) {
    margin-right: 12px;
  }

  text-shadow: 2px 2px 4px blue;

  &.active {
    color: var(--secondaryTextColor);
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--primaryTextColor);
  transition: all 0.5s ease;
  text-shadow: 2px 2px 4px blue;

  &.active {
    color: var(--secondaryTextColor);
  }
`;

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <StyledNavLink>
      <StyledLink to="/" exact>
        Home
      </StyledLink>

      {isLoggedIn && (
        <StyledLink to="/contacts" exact>
          Contacts
        </StyledLink>
      )}
    </StyledNavLink>
  );
}

export default Navigation;
