import { useState } from "react";
import { useQuery } from "react-query";

// Components
import { Item } from "./Item/item";
import { StyledButton, Wrapper } from "./App.styled";

//Icons
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Cart from "./Cart/Cart";

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

//comes back as an array for the cart items
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((acc: number, item) => acc + item.quantity, 0); // iterates through items in cart, uses amount and adds up total amount in cart, with initial amount of 0.
  };
  const addToCart = (clickedItem: CartItemType) => {
    // 1. Call the setter, with access to previous state.
    setCartItems((prev) => {
      // 2. Is the item already added in the cart?
      // check if item exists...
      const isItemInCart = prev.find((item) => item.id === clickedItem.id); //returns true or false if is in cart already (array)

      // 3. If it exists, loop through until find item we clicked on, return obj as item and add to the amount in cart
      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      // if doesn't exist, this means it's the first time the item is added to cart. So return an array with all previous stuff in cart, then add item to array with clickedItem and amount as 1.
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        //
        // if on right item...
        console.log("acc", acc);
        console.log("item", item);
        if (item.id === id) {
          // check amount is 1, then we remove from array if so, deleting it
          if (item.quantity === 1) return acc;
          //otherwise we return new array, spread acumlated and a new item and remove 1 from the amount.
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        } else {
          // other return item as it is.
          return [...acc, item];
        }
      }, [] as CartItemType[]); //accumulates starts as an empty array that specified at cartitemtype with array.
    });
  };

  //to keep api from fetching before ready.
  if (isLoading) return <LinearProgress />;
  //error handling
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
