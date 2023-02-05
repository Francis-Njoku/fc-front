import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../../assets/images/bg-1.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  getLoginSelector,
  loginUser,
} from "../../../services/slices/auth/login";

export default function Login() {
  const dispatch = useDispatch();
  const { loading } = useSelector(getLoginSelector);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = () => {
    const data = {
      email: inputValues.email,
      password: inputValues.password,
    };
    dispatch(loginUser(data));
  };

  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
      }}
    >
      <div className="container h-p100">
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center g-0">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded10 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h2 className="text-primary">Let's Get Started</h2>
                  </div>
                  <div className="p-40">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control ps-15 bg-transparent"
                        placeholder="Username"
                        value={inputValues.email}
                        onChange={handleChangeInput}
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control ps-15 bg-transparent"
                        placeholder="Password"
                        value={inputValues.password}
                        onChange={handleChangeInput}
                        name="password"
                      />
                    </div>
                    <div className="row">
                      <div className="col-12 text-center">
                        <button
                          disabled={
                            !(inputValues.password && inputValues.email)
                          }
                          type="submit"
                          className="btn btn-danger mt-10"
                          onClick={handleSubmit}
                        >
                          {loading ? "Loading..." : "SIGN IN"}
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-warning ms-5">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
