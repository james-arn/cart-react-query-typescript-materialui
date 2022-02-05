import { Box, Button } from "@material-ui/core";
import { CartItemType } from "../App";
import "../Styles/item.css";

// Types
type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

//how to specifiy props in a TS react component.
export const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div className="container">
    <img className="img" src={item.image} alt={item.title} />
    <div className="items">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button
      style={{
        borderRadius: 20,
      }}
      variant="contained"
      onClick={() => handleAddToCart(item)}
    >
      Add to cart
    </Button>
  </div>
);
