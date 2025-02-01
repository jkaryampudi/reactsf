import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MainComponent = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to React + Azure AD Authentication</h2>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()} style={{ padding: "10px", fontSize: "16px" }}>
          Login with Microsoft
        </button>
      ) : (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={() => logout({ returnTo: window.location.origin })} style={{ padding: "10px", fontSize: "16px", marginLeft: "10px" }}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default MainComponent;
