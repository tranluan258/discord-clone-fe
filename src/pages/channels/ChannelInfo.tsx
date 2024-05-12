import { useParams } from 'react-router-dom';

const ChannelInfo = () => {
  const { channelId } = useParams();

  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="z-10 col-start-1 col-end-3 min-h-screen ">
        <div className="bg-zinc-800">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-gray-800 p-4">
              <div className="flex items-center">
                <div className="text-white">Direct Messages {channelId}</div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="flex items-center justify-between border-b border-gray-800 p-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                  <div className="ml-2 text-white">User</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 col-start-3 col-end-13 h-full">
        <div className="bg-zinc-800">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-gray-800 p-4">
              <div className="flex items-center">
                <div className="text-white">Message</div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="flex items-center justify-between border-b border-gray-800 p-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-800"></div>
                  <div className="ml-2 text-white">Chat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChannelInfo;
