import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>

          <div className="mt-8 text-center">
            {/* <img src={user?.photoURL} alt="Admin" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/> */}
            <h5 className="hidden mt-4 text-xl font-semibold text-white lg:block">
              Admin
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>

            <h3 className="text-xl">No user data found</h3>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <Link
                to="/tripDash"
                className="px-4 py-3 flex items-center space-x-4 rounded-md 
                text-white group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-text-white"
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clip-rule="evenodd"
                  />
                  <path
                    className="fill-current text-white group-text-white"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="text-white">Projects</span>
              </Link>
            </li>

          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
