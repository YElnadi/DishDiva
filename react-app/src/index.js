import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ModalProvider, Modal } from './context/Modal';

import "./index.css";
import App from "./App";
import configureStore from "./store";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Modal/>
      </BrowserRouter>
    </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
