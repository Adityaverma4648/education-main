import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaSpinner,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userData = { userName, role, email, password };
    console.log(userData);
    try {
      const response = await axios.post(
        "http://localhost:7000/auth/register",
        userData
      );
      console.log(response.data);
      if (response.data.status === "success") {
        setIsLoading(false);
        window.location.href("/login");
      }
    } catch (error) {
      console.error("There was an error registering the user:", error);
      if (error.response) {
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div className="w-screen h-[100vh] flex justify-center items-center">
      <div
        className="lg:w-[45vw] md:w-[70vw] w-11/12 h-[72vh] flex flex-col justify-end items-center bg-indigo-900 lg:mt-[5%] md:mt-[15%] mt-[25%] relative rounded-xl"
        style={{
          boxShadow: "2px 6px 18px rgba(0,0,0,0.2)",
        }}
      >
        <div className="font-semibold absolute top-[-120px] text-center text-2xl text-white">
          <div className="w-52 h-52">
            <img
              src="../../src/assets/signIn.png"
              alt="illustration"
              className="w-full"
            />
          </div>
          Register
        </div>

        <div className="w-full h-[80%] flex flex-col items-center justify-end px-16 py-4 bg-white">
          <div className="w-full flex flex-col justify-start items-start">
            <div>Register Using</div>
            <div className="w-full my-2 flex justify-between items-center">
              <Link
              to={`http://localhost:7000/auth/google`}
                className="flex justify-center items-center py-2 px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
              >
                <FaGoogle className="mx-2" /> Google
              </Link>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
              >
                <FaFacebook className="mx-2" /> Facebook
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
              >
                <FaTwitter className="mx-2" /> X.com
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-2 px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
              >
                <FaLinkedin className="mx-2" /> Linkedin
              </button>
            </div>
          </div>
          <div className="underline">OR</div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full flex justify-between items-start my-4">
              <div className="w-[47%]">
                <label htmlFor="userName" className="mb-2 font-medium">
                  UserName
                </label>
                <input
                  type="text"
                  className="w-full select-none py-[12px] px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
                  name="userName"
                  placeholder="Enter UserName"
                  value={userName}
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="w-[47%]">
                <label htmlFor="role" className="mb-2 font-medium">
                  Select Role
                </label>
                <select
                  className="w-full select-none py-[12px] px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="organization_admin">Organization Admin</option>
                  <option value="parent">Parent</option>
                </select>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start my-4">
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full select-none py-[12px] px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400 lowercase"
                name="email"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start my-4 relative">
              <div className="w-full flex flex-col justify-start items-start">
                <label htmlFor="password" className="mb-2 font-medium">
                  Password
                </label>
                <input
                  type={visibility ? "text" : "password"}
                  className="w-full select-none py-[12px] px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
                  name="password"
                  placeholder="Enter Password"
                  required
                  autoComplete="true"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="absolute top-[50px] right-0 me-4"
                onClick={() => setVisibility(!visibility)}
              >
                {visibility ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <button
              type="button"
              className="bg-indigo-900 py-[12px] px-8 rounded-[4px] shadow-lg text-white cursor-pointer"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              {isLoading ? <FaSpinner /> : `Register`}
            </button>
            <div className="my-4">
              Already have an account?
              <Link to="/login" className="text-orange-600 mx-1">
                Login!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  modalVisibilityHandler: PropTypes.func,
  redirect: PropTypes.string,
};

export default Register;
