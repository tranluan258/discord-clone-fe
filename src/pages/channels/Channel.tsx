import { NavLink, Outlet } from 'react-router-dom';

const Channel = () => {
  const channels = [
    {
      id: '1',
      name: 'General',
    },
    {
      id: '2',
      name: 'Random',
    },
    {
      id: '3',
      name: 'Off-topic',
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-start-1 flex min-h-screen flex-auto flex-shrink-0 flex-col bg-gray-900 text-white antialiased">
        <div className="fixed left-10 top-2 flex h-full w-full flex-col">
          <div className="flex-grow overflow-y-auto overflow-x-hidden">
            <ul className="flex h-full flex-col py-4">
              <li className="mb-3">
                <NavLink to="@me" className=" flex">
                  <span className="inline-flex items-center justify-center">
                    <div>
                      <img
                        className="h-14 w-14"
                        src="/src/assets/logo-login.png"
                        alt=""
                      />
                    </div>
                  </span>
                </NavLink>
              </li>
              {channels.map((channel) => (
                <li key={channel.id} className="mb-3">
                  <NavLink to={`/channels/${channel.id}`} className="flex">
                    <span className="inline-flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-gray-800"></div>
                    </span>
                  </NavLink>
                </li>
              ))}
              <li className="!mt-auto">
                <NavLink to="/" className="flex h-11 flex-row items-center ">
                  <span className="inline-flex items-center justify-center">
                    <svg
                      className="h-14 w-14"
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
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="z-10 col-start-2 col-end-13 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Channel;
