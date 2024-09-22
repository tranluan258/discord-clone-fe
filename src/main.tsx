import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Channels from './pages/channels/Channel';
import ChannelInfo from './pages/channels/ChannelInfo';
import ChatContainer from './pages/channels/ChatContainer';

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
        children: [{ path: ':chatContainer' }],
      },
      {
        path: ':channelId',
        element: <ChannelInfo />,
        children: [{ path: ':groupId', element: <ChatContainer /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
