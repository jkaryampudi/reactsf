import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import MainComponent from "./MainComponent"; // Your main component

const AUTH0_DOMAIN = "https://login.microsoftonline.com/d3ad2e7f-49fe-4b21-88e1-58b4700e6a3b/v2.0"; 
const AUTH0_CLIENT_ID = "a1a14eb0-8783-4bf5-aad8-ce0f074e051b"; // Your Azure AD Client ID

const App = () => {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <MainComponent />
    </Auth0Provider>
  );
};

export default App;
