import { useState } from "react";
import { useQuery } from "react-query";

// Components
import { Item } from "./Item/item";

//Icons
import { Badge, Box, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCartOutlined } from "@material-ui/icons";

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
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  //to keep api from fetching before ready.
  if (isLoading) return <LinearProgress />;
  //error handling
  if (error) return <div>Something went wrong...</div>;

  return (
    <Box>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
