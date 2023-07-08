import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState } from "react";
import RegisterUser from "./pages/RegisterUser";
import SeeUsers from "./pages/SeeUsers";
import Break from "./pages/Break";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Bob", age: 32, email: "bob@gmail.com", password: "1234567890" },
    { name: "Patrick", age: 99, email: "pat@gmail.fr", password: "ArbreOK !" },
  ]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RegisterUser users={users} setUsers={setUsers} />,
    },
    {
      path: "list",
      element: <SeeUsers users={users} />,
    },
    {
      path: "break",
      element: <Break />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
