import React, { useState, useEffect } from "react";
import axios from "axios";
import Joblisting from "./Joblisting";
import LoadingBar from "./LoadingBar";
const Joblistings = ({ isHomePage = true }) => {
  const [jobs, setjobs] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const fetchData = async () => {
    const url = isHomePage
      ? "http://localhost:8000/jobs?_limit=3"
      : "http://localhost:8000/jobs";
    try {
      setisLoading(true);
      const res = await axios.get(url);
      setjobs(res.data);
    } catch (error) {
      setisLoading(false);
      setError(error.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHomePage ? "Browse Jobs" : "Recent Jobs"}
        </h2>
        {error && (
          <em className=" text-red-400 flex justify-center text-base  font-bold">
            {error}
          </em>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <LoadingBar isLoading={isLoading} />
          ) : (
            jobs.map((job, index) => <Joblisting key={index} job={job} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Joblistings;
