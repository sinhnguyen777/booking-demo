import {IconAddress, IconPrice, IconTime, IconType} from "@/assets";
import React from "react";

export const Infomation = () => {
  return (
    <>
      <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
        <section className="flex flex-col grow self-stretch my-5 pb-20 text-base leading-6 max-md:mt-1.5 max-md:max-w-full">
          <div className="flex flex-col justify-center rounded-md bg-zinc-100 max-md:max-w-full">
            <div className="flex flex-col border-solid bg-zinc-100 border-zinc-100 max-md:max-w-full">
              <article className="flex flex-col px-5 py-3 bg-white rounded-md max-md:px-5 max-md:max-w-full">
                <h1 className="text-3xl font-medium text-black max-md:max-w-full">
                  MK Kitchen &amp; Bar - Bến Vân Đồn
                </h1>
                <div className="flex gap-2 mt-2 text-center text-black max-md:flex-wrap">
                  <IconAddress />
                  <div className="max-md:max-w-full">
                    Số 320 Bến Vân Đồn, P. 2, Q. 4
                  </div>
                </div>
                <div className="flex gap-2 mt-2 text-center max-md:flex-wrap">
                  <div className="flex gap-2 text-black">
                    <IconType />
                    <div>Loại hình:</div>
                  </div>
                  <div className="text-red-600 max-md:max-w-full">
                    Gọi món Á - Âu
                  </div>
                </div>
                <div className="flex gap-2 mt-2 text-black max-md:flex-wrap">
                  <IconPrice />
                  <div>Khoảng giá: </div>
                  <div className="text-center max-md:max-w-full">
                    300.000 - 500.000 đ/người
                  </div>
                </div>
                <div className="flex gap-1.5 mt-2 text-emerald-600 max-md:flex-wrap">
                  <IconTime />
                  <div className="max-md:max-w-full">
                    Đang mở cửa: 07:00 - 23:00
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
