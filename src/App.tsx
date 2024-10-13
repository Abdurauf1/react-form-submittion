import { ChangeEvent, useState } from "react";
import { UserType } from "./types";

const defaultState: UserType = {
  firstname: "",
  lastname: "",
  email: "",
  contact: 0,
  gender: "",
  subject: "",
  resume: "",
  url: "",
  programmingLanguage: "",
  about: "",
};

function App() {
  const [user, setUser] = useState<UserType>(defaultState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
  };

  const handleReset = () => {
    setUser(defaultState);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[500px] shadow mx-auto mt-10 py-6 px-3">
        <h1 className="text-center">Form</h1>
        <div className="mb-3">
          <label htmlFor="firstname">
            <span>First name</span>
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            value={user.firstname}
            onChange={handleInputChange}
            placeholder="Enter Your First Name"
            className="mt-2 py-1 px-2 border block w-full"
            type="text"
            name="firstname"
            id="firstname"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname">
            <span>Last name</span>
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            value={user.lastname}
            onChange={handleInputChange}
            placeholder="Enter Your Last Name"
            className="mt-2 py-1 px-2 border block w-full"
            type="text"
            name="lastname"
            id="lastname"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <span>Email</span>
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            className="mt-2 py-1 px-2 border block w-full"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact">
            <span>Contact</span>
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            value={user.contact}
            onChange={handleInputChange}
            placeholder="Enter Your Phone Number"
            className="mt-2 py-1 px-2 border block w-full"
            type="number"
            name="contact"
            id="contact"
            required
          />
        </div>
        <div className="mb-3">
          <p className="cursor-default">
            <span>Gender</span>
            <span className="text-red-600 ml-1">*</span>
          </p>
          <div className="flex gap-6 ml-5">
            <div className="flex items-center">
              <label className="mr-1" htmlFor="male">
                Male
              </label>
              <input type="radio" name="gender" id="male" required />
            </div>
            <div className="flex items-center">
              <label className="mr-1" htmlFor="female">
                Female
              </label>
              <input type="radio" name="gender" id="female" required />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <p className="cursor-default">Your best subject</p>
          <div className="flex gap-6 ml-5">
            <div className="flex items-center">
              <label className="mr-1" htmlFor="english">
                English
              </label>
              <input type="checkbox" name="english" id="english" />
            </div>
            <div className="flex items-center">
              <label className="mr-1" htmlFor="maths">
                Maths
              </label>
              <input type="checkbox" name="maths" id="maths" />
            </div>
            <div className="flex items-center">
              <label className="mr-1" htmlFor="physics">
                Physics
              </label>
              <input type="checkbox" name="physics" id="physics" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="resume">
            <span>Resume</span>
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            // value={user.resume}
            className="mt-2 py-1 px-2 border block w-full"
            type="file"
            name="resume"
            id="resume"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url">Enter URL</label>
          <input
            value={user.url}
            onChange={handleInputChange}
            placeholder="Enter URL"
            className="mt-2 py-1 px-2 border block w-full"
            type="text"
            name="url"
            id="url"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="programming-language">Select your choice</label>
          <select
            className="mt-2 py-1 px-2 border block w-full"
            name="programming-language"
            id="programming-language"
          >
            <option value="">Select Your Choice</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="typescript">TypeScript</option>
            <option value="swift">Swift</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="about">About</label>
          <textarea
            value={user.about}
            onChange={handleInputChange}
            className="mt-2 py-1 px-2 border block w-full"
            placeholder="Write About You"
            name="about"
            id="about"
            rows={7}
          ></textarea>
        </div>
        <div className="flex gap-x-4 mt-6">
          <button type="submit" className="btn bg-green-600 text-white py-1 rounded w-1/2">
            Submit
          </button>
          <button onClick={handleReset} className="btn bg-red-600 text-white py-1 rounded w-1/2">
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
