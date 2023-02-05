// src/services/slices/index.js
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import loginReducer from "./auth/login";
import registerReducer from "./auth/register";
import logoutReducer from "./auth/logout";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "counter",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  logout: logoutReducer
});

const PersistedReducer = persistReducer(persistConfig, rootReducer);

export default PersistedReducer;
