import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import MainComponent from "./MainComponent"; // Ensure this file exists in your src folder

const AZURE_AD_DOMAIN = "https://login.microsoftonline.com/d3ad2e7f-49fe-4b21-88e1-58b4700e6a3b/v2.0"; 
const AZURE_AD_CLIENT_ID = "38a5eebe-5693-4fa1-937b-4e30fe05ea0d"; 
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
