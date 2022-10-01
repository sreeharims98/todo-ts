import React from "react";
import useUserHook from "../../customHooks/useUserHook";

export const Navbar = () => {
  const [user, logout] = useUserHook();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>Navbar</h3>
      <h3>{user?.name}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
