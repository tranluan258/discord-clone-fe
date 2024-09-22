import { useParams } from 'react-router-dom';

const ChatContainer = () => {
  const { groupId } = useParams<{ groupId: string }>();
  return <>{groupId}</>;
};

export default ChatContainer;
