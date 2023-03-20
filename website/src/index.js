import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App";
import ErrorPage from "./components/error";
import ListBooks from "./components/listBooks";
import BookPage from "./components/bookPage";
import Cart from "./components/cart";
import appReducer from "./slice";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ListBooks />,
            },
            {
                path: "book/:bookId",
                element: <BookPage />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
