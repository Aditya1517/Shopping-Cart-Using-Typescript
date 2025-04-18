import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding: 20px 0;

  .cart-item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cart-item-info,
  .cart-item-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  img {
    max-width: 80px;
    height: auto;
    object-fit: cover;
    margin-left: 40px;
  }
`;
