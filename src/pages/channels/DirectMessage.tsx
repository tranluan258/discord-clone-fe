const DirectMessage = () => {
  return (
    <div className="bg-zinc-800">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-gray-800 p-4">
          <div className="flex items-center">
            <div className="text-white">Direct Messages</div>
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
  );
};
export default DirectMessage;
