import { createSlice } from "@reduxjs/toolkit";
import makeAPICall from "../../../utils/apiUtils";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  hasErrors: null,
  register: {},
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    getApp: (state = initialState) => {
      state.loading = true;
    },
    getAppSuccess: (state, { payload }) => {
      state.register = payload;
      state.loading = false;
    },
    getAppFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = payload;
    },
  },
});

// Three actions generated from the slice
const { getApp, getAppSuccess, getAppFailure } = registerSlice.actions;

// A selector
export const getRegisterSelector = (state) => state.register;

// The reducer
export default registerSlice.reducer;

// api call action
export const registerUser = (data) => (dispatch) => {
  dispatch(getApp());
  return makeAPICall({
    path: "/auth/register",
    payload: data,
    method: "POST",
  })
    .then((res) => {
      //   console.log(res, 'register successful');
      toast(
        "Registration successful, please check your email for registration email",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      dispatch(getAppSuccess(res.data));
    })
    .catch((err) => {
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
