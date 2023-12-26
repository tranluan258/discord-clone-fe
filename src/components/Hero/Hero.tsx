import { FC, ReactElement, useEffect, useState } from 'react';
import Header, { HeaderProps } from './Header';
import HeroCotainer from './HeroContainer';

const TITLE = 'Discord | Your Place to Talk and Hang Out';

const Hero: FC<{}> = (): ReactElement => {
  const [user, setUser] = useState<HeaderProps['user']>({});
  useEffect(() => {
    document.title = TITLE;
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <div className="flex flex-col">
      <Header user={user} />
      <HeroCotainer />
    </div>
  );
};

export default Hero;
