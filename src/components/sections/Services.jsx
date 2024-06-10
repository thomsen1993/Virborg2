"use client";

import { useEffect, useState } from "react";
import useRequestData from "@/hooks/useRequestData";
import Loader from "../Loader";
import Error from "@/components/Error";
import Underlines from "../Underlines";
import Btn from "../Btn";

const Services = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5023/services", "GET", null);
  }, []);

  const titles = {
    title: "Vores Ydelser",
    paragraph: [
      {
        text: "Herunder er oversigt over alle vores services.",
      },
      {
        text: "Hvis du måtte have spørgsmål, er du velkommen til at kontakte os.",
      },
    ],
  };

  return (
    <section id="services">
      {isLoading && <Loader />}
      {error && <Error />}
      {data && (
        <div className="bg-lightGreen text-secondaryTitle text-center">
          <div className="wrapper py-24">
            <Underlines color={"white"}>
              <h2 className="">{titles.title}</h2>
            </Underlines>
            {titles.paragraph.map((text, index) => (
              <p key={index}>{text.text}</p>
            ))}
            <div className="grid grid-cols-4 gap-5 mt-10 mx-10">
              {data.map((event) => (
                <figure key={event._id}>
                  <img
                    src={"http://localhost:5023/images/" + event.image}
                    alt={event.title}
                    className="rounded-full w-48 h-48 object-cover border-8 border-darkGreen mb-5 mx-auto"
                  />
                  <figcaption className="mb-2 text-lg">
                    {event.title}
                  </figcaption>
                  <figcaption
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: event.content }}
                  ></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center gap-5 my-5">
        <Btn href={"/services/services-new"} text={"Opret Ydelser"} />
        <Btn href={"/services/services-edit"} text={"rediger Ydelser"} />
      </div>
    </section>
  );
};

export default Services;
