import { NavLink } from "react-router-dom";
import { styled } from '@mui/system';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: var(--primaryTextColor);
  


  &:not(:last-child){
    margin-right: 12px;
  }

  transition: all 0.5s ease;
  text-shadow: 2px 2px 4px blue;

  &.active {
    color: var(--secondaryTextColor);
  }
`;

function AuthForm() {
  return (
    <nav>
      <StyledLink to="/register" exact>
        Sign up
      </StyledLink>
      <StyledLink to="/login" exact>
        Log in
      </StyledLink>
    </nav>
  );
}

export default AuthForm;

