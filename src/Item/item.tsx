import { Box, Button } from "@material-ui/core";
import { CartItemType } from "../App";

// Types
type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

//how to specifiy props in a TS react component.
export const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "100%",
      border: "1px solid lightblue",
      borderRadius: "20px",
      height: "100%",
    }}
  >
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Box>
);
