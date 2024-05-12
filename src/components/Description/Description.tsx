import { FC, ReactElement } from 'react';

const Description: FC<object> = (): ReactElement => {
  return (
    <>
      <div className="mt-20 flex items-center">
        <div className="grid  h-1/2  grid-cols-12 px-[40px] py-[120px]">
          <img
            src="src/assets/description.svg"
            alt=""
            className="col-start-2 col-end-7 "
          />
          <div className="col-start-8 col-end-12  ml-3 flex flex-col">
            <h2 className="text-5xl font-[800] leading-normal">
              Tạo một nơi cho bạn và chỉ cho những người nhận được lời mời
            </h2>
            <div className="mt-[24px] text-[24px] leading-[1.625]">
              Máy chủ Discord được sắp xếp theo các kênh chủ đề mà bạn có thể
              quản lý, chia sẻ và nói về cuộc sống hàng ngày của mình mà không
              làm ảnh hưởng đến nhóm trò chuyện.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center bg-gray-300">
        <div className="grid  h-1/2  grid-cols-12 px-[40px] py-[120px]">
          <div className="col-start-2 col-end-6 ml-3 flex flex-col pt-10">
            <h2 className="text-5xl font-[800] leading-normal">
              Địa điểm vui chơi dễ dàng
            </h2>
            <div className="mt-[24px] text-[24px] leading-[1.625]">
              Hãy đặt gạch một chỗ trong kênh thoại khi bạn đang rảnh. Bạn bè
              trong máy chủ của bạn có thể nhìn thấy trạng thái của bạn và ngay
              lập tức nhảy vào nói chuyện mà không cần phải gọi.
            </div>
          </div>
          <img
            src="src/assets/image-voice.svg"
            alt=""
            className="col-start-7 col-end-12 "
          />
        </div>
      </div>
      <div className="mt-20 flex items-center ">
        <div className="grid h-1/2  grid-cols-12 px-[40px] py-[120px]">
          <img
            src="src/assets/fandom.svg"
            alt=""
            className="col-start-2 col-end-7 "
          />
          <div className=" col-start-8 col-end-12  ml-3 flex flex-col pt-10">
            <h2 className="text-5xl font-[800] leading-normal">
              Từ một ít đến một fandom
            </h2>
            <div className="mt-[24px] text-[24px] leading-[1.625]">
              Tạo một cộng đồng với quy mô bất kỳ với các công cụ quản lý và
              thiết lập quyền truy cập của thành viên. Trao các quyền đặc biệt
              cho thành viên, tạo kênh riêng, và nhiều hơn nữa.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center bg-gray-300 px-[40px]">
        <div className="grid grid-cols-12 px-[40px] py-[120px]">
          <div className=" col-start-2 col-end-12  ml-3 flex flex-col items-center justify-center pt-10">
            <h2 className="text-center text-5xl font-[800] uppercase leading-normal">
              Công nghệ đáng tin cậy để giữ liên lạc với nhau
            </h2>
            <div className="mt-[24px] text-center text-[24px] leading-[1.625]">
              Vẫy tay chào khi trò chuyện video, xem bạn bè stream game của họ,
              hoặc tụ tập và vẽ cho nhau xem bằng tính năng chia sẻ màn hình.
            </div>
          </div>
          <img
            src="src/assets/chill.svg"
            alt=""
            className="col-start-1 col-end-13 w-full"
          />
        </div>
      </div>
    </>
  );
};
export default Description;
