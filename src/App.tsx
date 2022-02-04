import { useState } from "react";
import { useQuery } from "react-query";

// Components
import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
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

  return <div className="App">start</div>;
}

export default App;
