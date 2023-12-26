import { FC, ReactElement, useEffect, useState } from 'react';

const HeroCotainer: FC<{}> = (): ReactElement => {
  const [agent, setAgent] = useState<string>('');

  useEffect(() => {
    const agent = navigator.userAgent;

    if (agent.includes('Windows')) setAgent('Windows');
    else if (agent.includes('Mac')) setAgent('Mac');
    else if (agent.includes('Linux')) setAgent('Linux');
  }, []);
  return (
    <>
      <div className="z-1 grid grid-cols-12 gap-5 bg-[#404EED] px-[200px] py-[120px]">
        <div className="z-10 col-span-8 col-start-3">
          <div className="text-center">
            <h1 className=" text-[70px] font-semibold uppercase text-white">
              Hãy tưởng tượng một nơi…
            </h1>
            <div className="leading-2 mt-[40xp] break-normal text-center text-[25px] text-white">
              …nơi mà bạn có thể tham gia một câu lạc bộ trường học, một nhóm
              chơi game hoặc một cộng đồng nghệ thuật. Nơi mà chỉ có bạn và một
              số bạn bè dành thời gian cho nhau. Một nơi giúp bạn dễ dàng trò
              chuyện hàng ngày và gặp mặt thường xuyên hơn.
            </div>
          </div>
          <div className="mt-[24px] flex flex-wrap items-center justify-center text-[28px]">
            <a
              href=""
              className="mx-[24px] rounded-3xl bg-white px-[32px] py-[16px] text-xl"
            >
              Download for {agent}
            </a>
            <a
              href=""
              className="mx-[24px] rounded-3xl bg-black px-[32px] py-[16px] text-xl text-white"
            >
              Open Discord on Broswer
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full ">
        <img
          src="src/assets/hero-background.svg"
          className="absolute bottom-0 left-1/2 top-auto ml-[-1030px]"
        />
        <img
          src="src/assets/left.svg"
          alt=""
          className="absolute bottom-0 right-0"
        />
        <img
          src="src/assets/rigth.svg"
          alt=""
          className="absolute bottom-0 left-0"
        />
      </div>
    </>
  );
};

export default HeroCotainer;
