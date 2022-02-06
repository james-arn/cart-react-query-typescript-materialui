import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Wrapper } from "./item.styled";

// Types
type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
};

//how to specifiy props in a TS react component.
export const Item: React.FC<Props> = ({ item, addToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button variant="contained" onClick={() => addToCart(item)}>
      Add to cart
    </Button>
  </Wrapper>
);
