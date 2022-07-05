import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import RootReducer from "./store/reducers/RootReducer";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

