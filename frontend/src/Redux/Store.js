import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default localStorage for web
import { combineReducers } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import counterReducer from './slice'; // Import your slice here

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,  // Add your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk], // You can add more middlewares if needed
});

export const persistor = persistStore(store);
