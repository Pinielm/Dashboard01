import React from "react";
import { BsCurrecyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import bg1 from "../data/bg1.jpg";
import "../index.css";

import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div
        className=" flex-wrap 
      lg:flex-nowrap 
      justify-center "
      >
        <div
          className="bg-white 
          dark:text-gray-200
         dark:bg-secondary-dark-bg h-60
         rounded-xl w-full lg:w-full p-8 pt-9 m-3
          bg-no-repeat bg-cover
         bg-center shadow-lg  images"
        >
          <div
            className="flex justify-between
           items-center"
          >
            <div>
              <p
                className="font-bold 
              text-gray-400"
              >
                Earnings
              </p>
              <p className="text-2xl">$63,444.08</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div
          className="flex m-3 flex-wrap 
        justify-center gap-1 items-center"
        >
          {earningData.map((item) => (
            <div
              className="bg-white dark:text-gray-200
          dark:bg-secondary-dark-bg md:w-56
          p-4 pt-9 rounded-2xl shadow-lg"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 
            rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span
                  className="text-lg 
                font-semibold"
                >
                  {item.amount}
                </span>
                <span
                  className={`text-sm 
                  text-${item.pcColor}
                  ml-2`}
                >
                  {item.percentage}
                </span>
              </p>
              <p
                className="text-sm text-gray-400
              mt-1"
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex gap-10 
      flex-wrap justify-center"
      >
        <div
          className="bg-white 
        dark:text-gray200
        dark:bg-secondary-dark-bg m-3
        rounded-2xl md:w-780 shadow-lg
        "
        >
          <div className="flex justify-between">
            <p
              className="font-semibold 
            text-xl m-2"
            >
              Revenue Updates
            </p>
            <div className="flex items-center gap-4">
              <p
                className="flex items-center gap-2
              text-gray-600
              hover:drop-shadow-xl mr-4"
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p
                className="flex items-center gap-2
              text-green-400
              hover:drop-shadow-xl mr-4"
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div
            className="mt-10 flex gap-10
           flex-wrap
          justify-center"
          >
            <div
              className="border-r-1 
            border-color m-4 pr-10"
            >
              <div>
                <p>
                  <span
                    className="text-3xl
                  font-semibold"
                  >
                    $93,438
                  </span>
                  <span
                    className="p-1.5 
                  hover:drop-shadow-xl
                  cursor-pointer
                  rounded-full text-white
                  bg-green-400 ml-3
                  text-xs"
                  >
                    23%
                  </span>
                </p>
                <p
                  className="text-gray-500
                mt-1"
                >
                  Budget
                </p>
              </div>

              <div className="mt-8">
                <p>
                  <span
                    className="text-3xl
                  font-semibold"
                  >
                    $12,438
                  </span>
                </p>
                <p
                  className="text-gray-500
                mt-1"
                >
                  Expense
                </p>
              </div>

              <div className="mt-5">
                <SparkLine
                  id="line-sparkline"
                  currentColor={currentColor}
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  size="md"
                  text="Download Report"
                  borderRadius="10px "
                />
              </div>
            </div>

            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
