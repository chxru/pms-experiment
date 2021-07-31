import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import IndexPage from "./pages";

const theme = extendTheme({
  colors: {
    primary: "#1C2340",
    secondry: "#FFFFFF",
    background: "#F2F6F9",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#F2F6F9",
        overflow: "hidden",
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/" component={IndexPage} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
};

export default App;
