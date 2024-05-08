"use client";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import {Gallery, Infomation, Order} from "@/components";

export default function Home() {
  return (
    <main className="container mx-auto px-32">
      <div className="flex flex-col px-1.5 pt-16">
        <div className="justify-center max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col rounded-lg w-[66%] max-md:ml-0 max-md:w-full">
              <Image
                className="grow w-full aspect-[2.27] max-md:max-w-full rounded-lg"
                src="https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-mk-kitchen-bar-ben-van-don-1-normal-2253769856506.webp"
                alt=""
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
            <Gallery />
          </div>
        </div>
        <div className="justify-center max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-col max-md:gap-0">
            <Infomation />
            <Order />
          </div>
        </div>
      </div>
    </main>
  );
}
