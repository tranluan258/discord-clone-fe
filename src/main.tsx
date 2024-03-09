import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Channels from './pages/channels/Channel';
import DirectMessage from './pages/channels/DirectMessage';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/channels',
    element: <Channels />,
    children: [{ path: '@me', element: <DirectMessage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
