"use client";

import { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import Loader from "../../components/Loader";
import Error from "@/components/Error";
import Image from "next/image";
import background from "../../../public/udtalelser-bg.jpg";
import Btn from "../Btn";
import Link from "next/link";
import Underlines from "../Underlines";

const UsersRespond = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    makeRequest("http://localhost:5023/reviews", "GET", null);
  }, []);

  const handleRadioClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-10 overflow-hidden" id="users">
      {isLoading && <Loader />}
      {error && <Error />}
      {data && (
        <div className="grid text-secondaryTitle text-center">
          <Image
            src={background}
            alt=""
            className="h-[500px] object-cover col-start-1 row-start-1"
          />
          <div className="bg-lightGreen/80 col-start-1 row-start-1">
            <div className="wrapper flex flex-col justify-center h-full">
              <Underlines color={"white"}>
                <h3>Kundeudtalelser</h3>
              </Underlines>
              <div className="flex my-20 overflow-hidden">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none w-full transition-transform duration-500"
                    style={{
                      transform: `translateX(${-100 * currentIndex}%)`,
                    }}
                  >
                    <p className="mb-2">"{item.content}"</p>
                    <p>- {item.author}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-5">
                {data.map((_, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer w-5 h-5 rounded-full border border-white ${
                      currentIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => handleRadioClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center gap-5 my-5" id="users">
        <Btn href={"/users/users-new-review"} text={"Opret review"}/>
        <Btn href={"/users/users-edit-review"} text={"Redigere review"}/>
      </div>
    </section>
  );
};

export default UsersRespond;
