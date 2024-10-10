import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../app/home";
import LoginPage from "../app/login";
import ProtectedPage from "../app/protected";
import { fakeAuthProvider } from "../auth";
import { loginAction } from "./actions";
import { loginLoader, protectedLoader } from "./loaders";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username };
    },
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        action: loginAction,
        loader: loginLoader,
        Component: LoginPage,
      },
      {
        path: "protected",
        loader: protectedLoader,
        Component: ProtectedPage,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/");
    },
  },
]);
