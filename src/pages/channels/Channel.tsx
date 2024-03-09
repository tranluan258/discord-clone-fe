import { NavLink, Outlet } from 'react-router-dom';

const Channel = () => {
  return (
    <div className="grid  grid-cols-10 gap-0">
      <div className="col-start-1 flex min-h-screen flex-auto flex-shrink-0 flex-col bg-black text-white antialiased">
        <div className="fixed left-0 top-0 flex h-full w-64 flex-col ">
          <div className="flex-grow overflow-y-auto overflow-x-hidden">
            <ul className="flex h-full flex-col space-y-1 py-4">
              <li>
                <NavLink
                  to="@me"
                  className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6  hover:border-indigo-500 hover:bg-gray-50 hover:text-gray-800 focus:outline-none "
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Direct Messages
                  </span>
                </NavLink>
              </li>
              {/* <li> */}
              {/*   <NavLink */}
              {/*     to="123" */}
              {/*     className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-indigo-500 hover:bg-gray-50 hover:text-gray-800 focus:outline-none" */}
              {/*   > */}
              {/*     <span className="ml-4 inline-flex items-center justify-center"> */}
              {/*       <svg */}
              {/*         className="h-5 w-5" */}
              {/*         fill="none" */}
              {/*         stroke="currentColor" */}
              {/*         viewBox="0 0 24 24" */}
              {/*         xmlns="http://www.w3.org/2000/svg" */}
              {/*       > */}
              {/*         <path */}
              {/*           strokeLinecap="round" */}
              {/*           strokeLinejoin="round" */}
              {/*           strokeWidth="2" */}
              {/*           d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" */}
              {/*         ></path> */}
              {/*       </svg> */}
              {/*     </span> */}
              {/*     <span className="ml-2 truncate text-sm tracking-wide"> */}
              {/*       Channel 123 */}
              {/*     </span> */}
              {/*   </NavLink> */}
              {/* </li> */}
              <li className="!mt-auto">
                <NavLink
                  to="/"
                  className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-indigo-500 hover:bg-gray-50 hover:text-gray-800 focus:outline-none"
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Logout
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="z-10 col-start-2 col-end-11 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Channel;
