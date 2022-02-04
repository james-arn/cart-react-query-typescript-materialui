import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { customTheme } from "./Assets/theme";

const client = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
    ,
  </ThemeProvider>,

  document.getElementById("root")
);
