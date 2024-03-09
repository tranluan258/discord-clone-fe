import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // navigate('/channels/@me')
    // TODO: Implement login
    navigate('/channels/@me');
  };
  return (
    <>
      <div className="flex h-screen w-full items-center  justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex justify-center bg-black px-6 py-12">
          <div className="flex flex-col ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-2 text-3xl font-bold text-white">
                Welcome Back!
              </h1>
              <h2 className="text-xl text-white">
                We're so excited to see you again!
              </h2>
            </div>
            <div>
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="mt-4 h-[60px] w-[400px] rounded-xl bg-gray-800 px-4 py-2 text-white"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-4 h-[60px] w-[400px] rounded-xl bg-gray-800 px-4 py-2 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-4 flex items-center justify-center">
                  <a href="" className="text-white">
                    Forgot your password?
                  </a>
                </div>
                <button className="mt-4 h-[60px] w-[400px] rounded-xl bg-[#7289DA] px-4 py-2 text-white">
                  Login
                </button>
                <div className="mt-4 flex items-center justify-center">
                  <input type="checkbox" />
                  <label className="ml-2 text-white">Remember me</label>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <a href="" className="text-white">
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="ml-12 flex w-1/3 flex-col items-center justify-center">
            <img src="src/assets/logo-login.png" alt="" />
            <div className="mt-7 text-center text-white">
              <h2>Login with QR Code</h2>
              <div>
                Scan this with
                <strong>the Discord mobile app</strong>
                to log in instantly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
