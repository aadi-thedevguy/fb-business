import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./components/error-page.tsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Login from "./components/Login.tsx";
import { AuthProvider } from "./components/AuthContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    loader: async () => {
      const user = null;
      if (!user) {
        throw redirect("/login");
      }
      return { user };
    },
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    // loader: async () => {
    //   const user = null;
    //   if (user) {
    //     throw redirect("/");
    //   }
    // },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
