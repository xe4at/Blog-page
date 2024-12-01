import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./styles/index.css";
import "./styles/font.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import theme from "./mui/theme";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm41yfq3f02ag07w6d8zgk5w5/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
