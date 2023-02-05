import React from "react";
import "./assets/css/App.css";
import AllPages from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AllPages />
      <ToastContainer />
    </>
  );
}

export default App;
