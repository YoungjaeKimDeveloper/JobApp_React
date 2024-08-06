import React from "react";
import { useNavigate } from "react-router-dom";
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
import AddJob from "../Pages/AddJob";
import EditJob from "../Pages/EditJob";
const App = () => {
  //add Job
  const addnewJob = async (addJob) => {
    const res = await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addJob),
    });
    return;
  };

  //Delete job
  const deleteJob = async (id) => {
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //Update Job
  const updateJob = async (updatedJob) => {
    const res = await fetch(`http://localhost:8000/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element=<Layout />>
        <Route index element=<HomePage /> />
        <Route path="/jobs" element=<JobsPage /> />
        <Route path="/jobs/:id" element=<JobPage deleteJob={deleteJob} /> />
        <Route path="/addJob" element=<AddJob addnewJob={addnewJob} /> />
        <Route path="/editJob/:id" element=<EditJob updateJob={updateJob} /> />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
