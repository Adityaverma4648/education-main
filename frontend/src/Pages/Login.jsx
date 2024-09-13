import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle, FaLinkedin, FaSpinner, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userData = { email, password };
    console.log(userData);
    try {
      const response = await axios.post(
        "http://localhost:7000/auth/login",
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

  // alert(process.env.BACKEND_APP_BASE_URL)

  return (
    <div
      className="w-screen h-[100vh] flex justify-center items-center"
      style={
        {
          // background:
          //   'url("https://img.freepik.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=sph")',
          // backgroundRepeat: "none",
          // backgroundPosition: "center",
        }
      }
    >
      <div
        className="lg:w-[45vw] md:w-[70vw] w-11/12 h-[65vh] mt-[5%] flex justify-center items-end bg-indigo-900 relative rounded-xl"
        style={{
          boxShadow: "2px 6px 18px rgba(0,0,0,0.2)",
        }}
      >
        <div className="w-full font-semibold absolute top-[-120px] text-center text-2xl flex flex-col justify-center items-center ">
          <div className="w-52 h-52">
            <img
              src="../../src/assets/signIn.png"
              alt="illustration"
              className="w-full"
            />
          </div>
          <div className="w-full text-white">
          Login
          </div>
        </div>

        <div className="w-full h-[80%] flex flex-col justify-center items-center bg-white">
          <div className="px-16 w-full flex flex-col justify-start items-start">
            <div>Login Using</div>

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
          <form className="px-16 w-full" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col justify-start items-start mb-6">
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                className="w-full select-none py-[12px] px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400 lowercase"
                name="email"
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start my-6 relative">
              <div className="w-full flex flex-col justify-start items-start ">
                <label htmlFor="password" className="mb-2 font-medium">
                  Password
                </label>
                <input
                  type={!visibility ? "text" : "password"}
                  className="w-full select-none py-[12px] px-2 border rounded-[4px] border-gray-900 shadow-md text-black placeholder-gray-400"
                  onChange={(e)=>{
                    setPassword(e.target.value);
                  }}
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <button
                type="button"
                className="absolute top-[50px] right-0 me-4"
                onClick={() => {
                  setVisibility(!visibility);
                }}
              >
                {visibility ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="w-full flex flex-col justify-start items-end">
              <button type="button" className="text-sm">
                Forgot password?
              </button>
            </div>

            <button
              type="button"
              className="bg-indigo-900 text-white py-[12px] px-8 rounded-[4px] shadow-lg">
                {isLoading ? <FaSpinner /> : "Login"}
              </button>

            <div className="my-4">
              Do not have an account?
              <Link to={"/register"} className="text-orange-600 mx-1">
                Register!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
