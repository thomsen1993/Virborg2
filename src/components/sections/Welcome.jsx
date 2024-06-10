"use client";

import { useEffect } from "react";
import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import Link from "next/link";
import Btn from "../Btn";

const Welcome = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataServices, makeRequest: makeRequestServices } =
    useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5023/aboutus", "GET", null);
  }, []);

  useEffect(() => {
    makeRequestServices("http://localhost:5023/services", "GET", null);
  }, []);

  return (
    <section className="wrapper py-20" id="about">
      {isLoading && <Loader />}
      {error && <Error />}
      {data && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="mb-5">
              Velkommen til{" "}
              <span className="text-lightGreen">
                Viborg <br /> Haveservice
              </span>
              <div className="w-20 border-b-2 border-lightGreen mt-4"></div>
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: data.content }}
              className="text-secondaryText"
            ></div>
          </div>
          <div>
            {dataServices && (
              <div className="grid grid-cols-2 gap-6">
                {dataServices.slice(0, 2).map((img, index) => (
                  <figure key={index}>
                    <img
                      src={"http://localhost:5023/images/" + img.image}
                      alt=""
                      className=""
                    />
                    <figcaption>
                      <p className="my-2">
                        <strong>{img.title}</strong>
                      </p>
                      <p className="text-secondaryText">{img.content}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
          <Btn href={"/welcomeAdmin"} text={"se alle ydelser"} />
        </div>
      )}
    </section>
  );
};

export default Welcome;
