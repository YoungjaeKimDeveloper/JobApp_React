import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const AddJob = ({ updateJob }) => {
    
  const { id } = useParams();
  const [error, setError] = useState("");
  const [jobs, setJobs] = useState({});
  const url = `http://localhost:8000/jobs/${id}`;
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      setJobs(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(jobs);
  console.log(jobs.description);
  const [type, setType] = useState(jobs.type);
  const [title, setTitle] = useState(jobs.title);
  const [description, setDescription] = useState(jobs.description);
  const [salary, setSalary] = useState(jobs.salary);
  const [location, setLocation] = useState(jobs.location);
  const [companyName, setCompanyName] = useState(jobs.companyName);
  const [companyDescription, setCompanyDescription] = useState(
    jobs.companyDescription
  );
  const [companyContactEmail, setCompanyContactEmail] = useState(
    jobs.companyContactEmail
  );
  const [companyContact, setCompanyContact] = useState(jobs.companyContact);

  const newJob = {
    id: id,
    type,
    title,
    description,
    salary,
    location,
    company: {
      name: companyName,
      description: companyDescription,
      contactEmail: companyContactEmail,
      contactPhone: companyContact,
    },
  };

  const navigate = useNavigate();

  const editJob = (newJob) => {
    updateJob(newJob);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editJob(newJob);
    console.log(id);

    navigate("/");
  };

  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6 text-blue-700">
                Edit Job
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  value={companyContactEmail}
                  onChange={(e) => setCompanyContactEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={companyContact}
                  onChange={(e) => setCompanyContact(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddJob;