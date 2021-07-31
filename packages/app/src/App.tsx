import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// pages
import IndexPage from "./pages";
import LoginPage from "./pages/auth/login";

// components
import Overlay from "./components/overlay";

// contexts
import AuthContext from "./contexts/auth";

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
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const signIn = () => setisLoggedIn(true);
  const signOut = () => setisLoggedIn(false);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <AuthContext.Provider
          value={{ AuthStatus: isLoggedIn, SignIn: signIn, SignOut: signOut }}
        >
          <Overlay>
            {!isLoggedIn ? (
              <Switch>
                <Route path="/" component={IndexPage} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/" component={LoginPage} />
              </Switch>
            )}
          </Overlay>
        </AuthContext.Provider>
      </ChakraProvider>
    </Router>
  );
};

export default App;
