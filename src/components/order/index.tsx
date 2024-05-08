import {IconAdult, IconChildren} from "@/assets";
import React, {useEffect, useState} from "react";
import ReactDatePicker from "react-datepicker";
import {CustomDatePickerInput} from "../custom-date-picker-input";
import {generateArray} from "@/helpers";
import {arrTime} from "@/const";

export const Order: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectPeople, setSlectPeople] = useState<{
    adults: number;
    children: number;
  }>({
    adults: 1,
    children: 0,
  });

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSlectQuantityPeople = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const {name, value} = event.target;
    setSlectPeople((prevState: any) => ({
      ...prevState,
      [name]: parseInt(value, 10),
    }));
  };

  return (
    <>
      <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
        <form className="flex flex-col self-stretch p-2.5 mx-auto mt-2.5 w-full text-black bg-white rounded-xl border border-solid border-zinc-500 border-opacity-20 max-md:mt-4">
          <div className="flex gap-2 justify-center px-16 text-center leading-[150%] max-md:px-5">
            <h2 className="text-lg font-medium">Đặt chỗ</h2>
            <p className="text-base">(Để có chỗ trước khi đến)</p>
          </div>
          <div className="self-center mt-2 text-sm font-bold leading-5 text-center text-red-700">
            Giảm 10%
          </div>
          <div className="flex gap-2 justify-center py-1.5 mt-2 text-sm leading-5">
            <div className="flex flex-1 gap-2">
              <IconAdult />
              <label htmlFor="adults">Người lớn:</label>
            </div>
            <div className="flex flex-1 gap-2 self-start py-px">
              <IconChildren />
              <label htmlFor="children">Trẻ em:</label>
            </div>
          </div>
          <div className="flex gap-2 justify-center py-1.5 text-sm leading-5 whitespace-nowrap text-neutral-600">
            <div className="flex w-full flex-col justify-center">
              <select
                className="justify-center w-full px-3.5 py-2 bg-white rounded-md border border-solid border-stone-300"
                name="adults"
                id="adults"
                value={selectPeople.adults}
                onChange={handleSlectQuantityPeople}
              >
                {generateArray("adults").map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex w-full flex-col justify-center">
              <select
                className="justify-center w-full px-3.5 py-2 bg-white rounded-md border border-solid border-stone-300"
                name="children"
                id="children"
                value={selectPeople.children}
                onChange={handleSlectQuantityPeople}
              >
                {generateArray("children").map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-2 py-px mt-4 text-sm leading-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 1.63636C4.93318 1.63636 1.63636 4.93318 1.63636 9C1.63636 13.0668 4.93318 16.3636 9 16.3636C13.0668 16.3636 16.3636 13.0668 16.3636 9C16.3636 4.93318 13.0668 1.63636 9 1.63636ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z"
                fill="#333333"
                fillOpacity="0.8"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.18146 4.09082C8.63333 4.09082 8.99964 4.45713 8.99964 4.909V9.31243L11.8201 10.7227C12.2243 10.9247 12.3881 11.4162 12.186 11.8204C11.9839 12.2245 11.4925 12.3883 11.0883 12.1863L7.81556 10.5499C7.53837 10.4113 7.36328 10.128 7.36328 9.81809V4.909C7.36328 4.45713 7.72959 4.09082 8.18146 4.09082Z"
                fill="#333333"
                fillOpacity="0.8"
              ></path>
            </svg>
            <label htmlFor="arrival-time">Thời gian đến</label>
          </div>
          <div className="flex gap-2 justify-center py-1.5 text-sm leading-5 whitespace-nowrap text-neutral-600">
            <div className="flex w-full flex-row justify-center">
              <ReactDatePicker
                selected={selectedDate}
                onChange={(date: Date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                customInput={<CustomDatePickerInput />}
              />
            </div>
            <div className="flex w-full flex-col justify-center">
              <select
                id="txtGioDen"
                className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                name="sfTimeFrom"
                value={selectedOption}
                onChange={(e) => handleSelectChange(e.target.value)}
              >
                {arrTime.map((item) => (
                  <option key={item.key} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="justify-center items-center px-16 py-2.5 mt-7 text-base leading-6 text-center text-white bg-red-600 rounded-md max-md:px-5"
          >
            Đặt chỗ ngay
          </button>
        </form>
      </div>
    </>
  );
};
