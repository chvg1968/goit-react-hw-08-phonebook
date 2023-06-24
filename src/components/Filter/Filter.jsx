import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { Typography, TextField } from '@mui/material';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  
`;

const TitleFilter = styled(Typography)`
  text-align: center;
`;

const Input = styled(TextField)`
  display: block;
  justify-content:center;
  align-items: center;
  margin-top: 2px;
  /* width: 100%; */
  border-radius: 20px;

`;

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const onChangeFilter = evt => {
    dispatch(filter(evt.currentTarget.value.trim()));
  };

  return (
    <Label>
      <TitleFilter variant="body1"><b>Find contacts by name</b></TitleFilter>
      <Input
        type="text"
        onChange={onChangeFilter}
        placeholder="Enter search name"
        value={filterName}
        // label="Standard" 
        variant="filled"
        color="warning"

      />
    </Label>
  );
};

export default Filter;
