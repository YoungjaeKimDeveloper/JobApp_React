import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../Pages/Layout";
import HomePage from "../Pages/HomePage";
import JobsPage from "../Pages/JobsPage";
import JobPage from "./components/JobPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element=<Layout />>
        <Route index element=<HomePage /> />
        <Route path="/jobs" element=<JobsPage /> />
        <Route path="/jobs/:id" element=<JobPage /> />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
