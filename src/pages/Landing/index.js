import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="d-flex text-center text-white bg-dark chulo" style={{height: "100vh"}}>
      <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
        <header style={{marginBottom: "200px"}}>
          <div>
            <h3 className="float-md-start mb-0">Welcome</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link to="/login" className="nav-link active">
                Login
              </Link>
              <Link to="/signup" className="nav-link" href="#">
                Register
              </Link>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <h1>Welcome to Test App.</h1>
          <p className="lead">
            Test App is a one-page template for building simple and beautiful landing pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
        </main>
      </div>
    </div>
  );
}
