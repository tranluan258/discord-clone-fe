import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Channels from './pages/channels/Channel';
import ChannelInfo from './pages/channels/ChannelInfo';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/channels',
    element: <Channels />,
    children: [
      {
        path: '@me',
        element: <ChannelInfo />,
      },
      {
        path: ':channelId',
        element: <ChannelInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
