import styled from 'styled-components';
import IconButton from '@mui/material/IconButton'; 

export const Wrapper = styled.div`
  margin: 40px;
  display: flex; /* Enables flexbox layout */
  flex-wrap: wrap; /* Allows items to wrap to the next row if needed */
  justify-content: space-between; /* Distributes items evenly with space between them */
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
