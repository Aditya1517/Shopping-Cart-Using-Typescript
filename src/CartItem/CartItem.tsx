import Button from '@mui/material/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div className="cart-item-content">
      <h3>{item.title}</h3>

      <div className="cart-item-info">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>

      <div className="cart-item-buttons">
        <Button
          size="small"
          variant="contained"
          disableElevation
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          variant="contained"
          disableElevation
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>

    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
