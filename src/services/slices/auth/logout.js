import { createSlice } from "@reduxjs/toolkit";
import makeAPICall from "../../../utils/apiUtils";
import { logoutNow } from "../../../utils/authUtils";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  hasErrors: null,
  logout: {},
};

export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    getApp: (state = initialState) => {
      state.loading = true;
    },
    getAppSuccess: (state, { payload }) => {
      state.logout = payload;
      state.loading = false;
    },
    getAppFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
    },
  },
});

// Three actions generated from the slice
const { getApp, getAppSuccess, getAppFailure } = logoutSlice.actions;

// A selector
export const getLogoutSelector = (state) => state.logout;

// The reducer
export default logoutSlice.reducer;

// api call action
export const logoutUser = () => (dispatch) => {
  dispatch(getApp());
  return makeAPICall({
    path: "/logout",
    method: "GET",
  })
    .then((res) => {
      // console.log(res, "login successful");
      logoutNow()
      dispatch(getAppSuccess(res));

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
