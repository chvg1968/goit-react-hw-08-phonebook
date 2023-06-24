import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { styled } from '@mui/system';
import { Button, Container, Typography } from '@mui/material';

const MenuContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const MenuBox = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const MenuTitle = styled(Typography)`
  font-size: 16px;
  margin: 0;
  color: var(--primaryTextColor);
  transition: all 0.5s ease;
  text-shadow: 2px 2px 4px blue;
`;

const MenuBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 5px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  border: 2px solid rgb(252, 6, 6);
  background-color: #eb1d1d;

  &:hover,
  &:focus {
    background-color: rgb(114, 113, 114);
  }
`;

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <MenuContainer>
      <MenuBox>
        <MenuTitle variant="h6">Welcome, {name}</MenuTitle>
      </MenuBox>
      <MenuBtn
        variant="contained"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </MenuBtn>
    </MenuContainer>
  );
}

export default UserMenu;
