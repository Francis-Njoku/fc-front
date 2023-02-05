import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../../assets/images/bg-2.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  getRegisterSelector,
  registerUser,
} from "../../../services/slices/auth/register";
import { toast } from "react-toastify";
export default function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector(getRegisterSelector);
  const [inputValues, setInputValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordTwo: "",
  });

  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  function signUp() {
    if (inputValues.password === inputValues.passwordTwo) {
      const data = {
        email: inputValues.email,
        password: inputValues.password,
        name: `${inputValues.first_name} ${inputValues.last_name}`,
      };
      dispatch(registerUser(data));
    } else {
      toast("Password doesn't match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div
      className="hold-transition theme-primary bg-img"
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
                        placeholder="First Name"
                        value={inputValues.first_name}
                        onChange={handleChangeInput}
                        name="first_name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control ps-15 bg-transparent"
                        placeholder="Last Name"
                        value={inputValues.last_name}
                        onChange={handleChangeInput}
                        name="last_name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control ps-15 bg-transparent"
                        placeholder="Email"
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
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control ps-15 bg-transparent"
                        placeholder="Retype Password"
                        value={inputValues.passwordTwo}
                        onChange={handleChangeInput}
                        name="passwordTwo"
                      />
                    </div>
                    <div className="row">
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-info margin-top-10"
                          onClick={signUp}
                          disabled={
                            !(
                              inputValues.password &&
                              inputValues.passwordTwo &&
                              inputValues.email &&
                              inputValues.first_name &&
                              inputValues.last_name
                            )
                          }
                        >
                          {loading ? "Loading" : "REGISTER"}
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Already have an account?
                        <Link to="/login" className="text-danger ms-5">
                          {" "}
                          Sign In
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
