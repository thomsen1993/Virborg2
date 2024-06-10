"use client";

import { useEffect } from "react";
import useRequestData from "@/hooks/useRequestData";
import Image from "next/image";

import bgImg from "../../../public/banner-bg.jpg";
import Btn from "../Btn";

const Hero = () => {

    const { data, makeRequest } = useRequestData();

    useEffect(() => {
      makeRequest("http://localhost:5023/toast", "GET", null);
    }, []);

  return (
    <div className="grid items-center">
      <Image
        src={bgImg}
        alt="Viborg havemaskiner"
        className="brightness-75 col-start-1 row-start-1 -z-10"
      ></Image>
      {data && (
        <div className="col-start-1 row-start-1 text-center text-secondaryTitle wrapper">
          <h1>{data.title}</h1>
          <p className="mb-10">{data.content}</p>
          <Btn text={"læs mere"} />
        </div>
      )}
    </div>
  );
};

export default Hero;
