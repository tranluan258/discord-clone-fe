import { NavLink, Outlet, useParams } from 'react-router-dom';

const ChannelInfo = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const groups = [
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
      name: 'Nini',
    },
  ];

  return (
    <div>
      <div>{channelId}</div>
      <ul>
        {groups.map((channel) => (
          <li key={channel.id} className="mb-3">
            <NavLink
              to={`/channels/${channelId}/${channel.id}`}
              className="flex"
            >
              <span className="inline-flex items-center justify-center">
                <div className="h-14 w-14 rounded-full ">{channel.name}</div>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default ChannelInfo;
