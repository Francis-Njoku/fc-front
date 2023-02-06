import { createSlice } from "@reduxjs/toolkit";
import makeAPICall from "../../../utils/apiUtils";
import history from "../../history";
import { AUTH_TOKEN, REDIRECT_URL } from "../../../utils/constants";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  hasErrors: null,
  user: {},
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getApp: (state = initialState) => {
      state.loading = true;
    },
    getAppSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    getAppFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
    },
  },
});

// Three actions generated from the slice
const { getApp, getAppSuccess, getAppFailure } = loginSlice.actions;

// A selector
export const getLoginSelector = (state) => state.login;

// The reducer
export default loginSlice.reducer;

// api call action
export const loginUser = (data) => (dispatch) => {
  dispatch(getApp());
  return makeAPICall({
    path: "/auth/login",
    payload: data,
    method: "POST",
  })
    .then((res) => {
      // console.log(res, "login successful");
      toast(res.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(getAppSuccess(res.user));
      window.localStorage.setItem(AUTH_TOKEN, res?.token);
      const redirectUrl =
        window.sessionStorage.getItem(REDIRECT_URL) ?? "/dashboard";
      history.push(redirectUrl);
      window.location.reload();
    })
    .catch((err) => {
      // console.log(err)
      toast(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(getAppFailure(err));
    });
};
