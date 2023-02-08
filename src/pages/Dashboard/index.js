/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLogoutSelector,
  logoutUser,
} from "../../services/slices/auth/logout";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { loading } = useSelector(getLogoutSelector);

  function handleSubmit() {
    dispatch(logoutUser());
  }
  return (
    <div>
      <header className="py-3 mb-3 border-bottom">
        <div
          className="container-fluid d-grid gap-3 align-items-center"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div className="dropdown">
            <a
              className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none"
            >
              Dashboard
            </a>
         
          </div>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="flex-shrink-0 dropdown">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <p className="dropdown-item" onClick={handleSubmit} style={{cursor: "pointer"}}>
                    {loading ? "logging out..." : "Sign out"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid pb-3">
        <div
          className="d-grid gap-3"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div className="bg-light border rounded-3">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="bg-light border rounded-3">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
