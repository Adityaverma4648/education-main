import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default localStorage for web
import { combineReducers } from "redux";
// import { PersistGate } from "redux-persist/integration/react";
// import thunk from "redux-thunk";
import authReducer from "./Slice/AuthSlice"; // Import your slice here

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth : authReducer, // Add your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
