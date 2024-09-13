// import { useState, useEffect } from "react";

// //  importing icons
// import {
//   FaClock,
//   FaCog,
//   FaExclamation,
//   FaHome,
//   FaTable,
//   FaUser,
// } from "react-icons/fa";

// //  importing utils - urlExtractor
// import { urlExtractor } from "../utils/urlExtractor";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [active, setActive] = useState("");

//   const navLinks = [
//     { id: 1, name: "dashboard", route: "" },
//     { id: 2, name: "profile", route: "/profile" },
//     { id: 3, name: "assignments", route: "/assignments" },
//     { id: 4, name: "schedule", route: "/schedule" },
//     { id: 5, name: "settings", route: "/settings" },
//   ];

//   useEffect(() => {
//     const location = window.location.href;

//     //  const base_url = process.env.REACT_APP_BASE_URL;

//     const current_route = urlExtractor("http://localhost:5173", location);

//     console.log(location, current_route.slice(1, current_route.length));
//     setActive(current_route.slice(1, current_route.length));
//   }, []);

//   return (
//     <nav className="w-screen h-[60px] flex justify-between items-center bg-indigo-900 px-[2%] fixed z-[9999] top-0">
//       {/* logo */}
//       <Link to={'/'} className="font-bold text-xl cursor-pointer text-white">Logo</Link>

//       {/* navlinks */}
//       <div className="flex justify-center items-center font-medium">
//         {navLinks?.map((d, index) => {
//           return (
//             <Link
//               to={d.route}
//               key={index}
//               className={`flex me-8 justify-center items-center cursor-pointer ${
//                 active == d.name ? "text-orange-400" : "text-white"
//               }`}
//             >
//               {d.name === "dashboard" && <FaHome className="me-1" />}
//               {d.name === "profile" && <FaUser className="me-1" />}
//               {d.name === "assignments" && <FaTable className="me-1" />}
//               {d.name === "schedule" && <FaClock className="me-1" />}
//               {d.name === "settings" && <FaCog className="me-1" />}

//               {d.name.slice(0,1).toUpperCase()}{d.name.slice(1,d.name.length)}
//             </Link>
//           );
//         })}
//       </div>

//       {/* help and login */}
//       <div className="flex justify-center items-center  text-gray-300">
//         <button
//           type="button"
//           className="flex justify-center items-center me-8 cursor-pointer"
//         >
//           <FaExclamation />
//           Help
//         </button>

//         <Link to={"/login"} className="cursor-pointer">
//           SignIn
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { FaClock, FaCog, FaExclamation, FaHome, FaTable, FaUser } from "react-icons/fa";
import { urlExtractor } from "../utils/urlExtractor";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  const navLinks = [
    { id: 1, name: "dashboard", route: "/" },
    { id: 2, name: "profile", route: "/profile" },
    { id: 3, name: "assignments", route: "/assignments" },
    { id: 4, name: "schedule", route: "/schedule" },
    { id: 5, name: "settings", route: "/settings" },
  ];

  useEffect(() => {
    const current_route = urlExtractor("http://localhost:5173", location.pathname);
    current_route === "/" ? setActive("dashboard") : setActive(current_route.slice(1, current_route.length));
  }, [location]);

  return (
    <nav className="w-screen h-[60px] flex justify-between items-center bg-indigo-900 px-[2%] fixed z-[9999] top-0">
      {/* Logo */}
      <Link to="/" className="font-bold text-xl cursor-pointer text-white">
        Logo
      </Link>

      {/* Navigation Links */}
      <div className="flex justify-center items-center font-medium">
        {navLinks.map((d) => (
          <Link
            to={d.route}
            key={d.id}
            className={`flex me-8 justify-center items-center cursor-pointer ${
              active === d.name ? "text-orange-400" : "text-white"
            }`}
          >
            {d.name === "dashboard" && <FaHome className="me-1" />}
            {d.name === "profile" && <FaUser className="me-1" />}
            {d.name === "assignments" && <FaTable className="me-1" />}
            {d.name === "schedule" && <FaClock className="me-1" />}
            {d.name === "settings" && <FaCog className="me-1" />}
            {d.name.charAt(0).toUpperCase() + d.name.slice(1)}
          </Link>
        ))}
      </div>

      {/* Help and Login */}
      <div className="flex justify-center items-center text-gray-300">
        <button
          type="button"
          className="flex justify-center items-center me-8 cursor-pointer"
        >
          <FaExclamation />
          Help
        </button>

        <Link to="/login" className="cursor-pointer">
          SignIn
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
``
