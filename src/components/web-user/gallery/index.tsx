import Image from "next/image";
import React from "react";

export const Gallery: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch px-1.5 py-px max-md:max-w-full">
          <div>
            <div className="flex gap-4 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/130d4557ab17701c6be49efd2dbcc022c235f51010c06fbba788fb4b026ccf0d?apiKey=cdfbcbef799746368ea19747a2d1d638&amp;"
                  alt=""
                  className="grow shrink-0 max-w-full aspect-[1.72] w-[198px] max-md:mt-3"
                />
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/542d5a8573c672cda2324dfe2d50b5f2c2075e73de64520887e7837999ed2b16?apiKey=cdfbcbef799746368ea19747a2d1d638&amp;"
                  alt=""
                  className="grow shrink-0 max-w-full aspect-[1.72] w-[197px] max-md:mt-3"
                />
              </div>
            </div>
          </div>
          <div className="mt-2.5">
            <div className="flex gap-4 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d2773ea74cb766247f78636a7707827c2d06eae81af6003856eeb5e1c91e9e?apiKey=cdfbcbef799746368ea19747a2d1d638&amp;"
                  alt=""
                  className="grow shrink-0 max-w-full aspect-[1.72] w-[198px] max-md:mt-3"
                />
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d080c4961bbdc1095d6592955be0b88b9b86d37ddcb7e60f6fdf3d5bd622c7e2?apiKey=cdfbcbef799746368ea19747a2d1d638&amp;"
                  alt=""
                  className="grow shrink-0 max-w-full aspect-[1.72] w-[197px] max-md:mt-3"
                />
              </div>
            </div>
          </div>
          <div className="mt-2.5">
            <div className="flex gap-4 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8664dbd14702e7d835a8b034f29d49b1c585fcdf2527fe5da672205177117514?apiKey=cdfbcbef799746368ea19747a2d1d638&amp;"
                  alt=""
                  className="grow shrink-0 max-w-full aspect-[1.72] w-[198px] max-md:mt-3"
                />
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center text-sm leading-5 text-center text-white max-md:mt-3">
                  <div className="flex overflow-hidden relative flex-col justify-center aspect-[1.71] max-w-[197px] w-[197px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a50e1728283ec9de8e5c9ca0079a5e8e841ea71073c1ff49d26064d0545f654?apiKey=cdfbcbef799746368ea19747a2d1d638&amp;"
                      alt=""
                      className="object-cover absolute inset-0 size-full"
                    />
                    <div className="relative justify-center px-8 py-12 rounded-lg bg-black bg-opacity-30 max-md:px-5">
                      Xem tất cả
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
