import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import MainComponent from "./MainComponent"; // Ensure this file exists in your src folder

const AZURE_AD_DOMAIN = "https://login.microsoftonline.com/d3ad2e7f-49fe-4b21-88e1-58b4700e6a3b/v2.0"; 
const AZURE_AD_CLIENT_ID = "a1a14eb0-8783-4bf5-aad8-ce0f074e051b"; 
const REDIRECT_URI = "https://lemon-beach-00530c70f.4.azurestaticapps.net"; // Your Azure Static Web App URL

const App = () => {
  return (
    <Auth0Provider
      domain={AZURE_AD_DOMAIN}
      clientId={AZURE_AD_CLIENT_ID}
      authorizationParams={{ redirect_uri: REDIRECT_URI }}
    >
      <MainComponent />
    </Auth0Provider>
  );
};

export default App;
