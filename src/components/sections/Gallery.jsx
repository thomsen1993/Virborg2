"use client";

import { useEffect, useState } from "react";
import useRequestData from "@/hooks/useRequestData";
import Loader from "../Loader";
import Error from "@/components/Error";
import Btn from "../Btn";
import Underlines from "../Underlines";

const Gallery = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    makeRequest("http://localhost:5023/galleryitems", "GET", null);
  }, []);

  const filterBtn = [
    {
      btn: "All",
      text: "Alle",
    },
    {
      btn: "Plænepleje",
      text: "Plænepleje",
    },
    {
      btn: "Anlægsgartneri",
      text: "Anlægsgartneri",
    },
    {
      btn: "Forår og efterårsrengøring?",
      text: "Plantning",
    },
  ];

  return (
    <article className="wrapper py-20" id="gallery">
      {isLoading && <Loader />}
      {error && <Error />}
      {data && (
        <div className=" text-center">
          <Underlines color={"green-400"}>
            <h2 className="text-primaryTitle">Galleri</h2>
          </Underlines>
          <p className="text-secondaryText">Herunder et udvalg af billeder taget af vores arbejde.</p>
          <div className="flex gap-3 justify-center my-16">
            {filterBtn.map((btns, index) => (
              <button
                key={index}
                onClick={() => setFilter(btns.btn)}
                active={filter === btns.btn}
                className={`rounded-sm py-1 px-3 transition ${filter === btns.btn ? "bg-lightGreen text-secondaryTitle" : "bg-neutral-200"}`}
              >
                {btns.text}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5">
            {data
              .filter(
                (item) => filter === "All" || item.service.title === filter
              )
              .slice(0, 9)
              .map((item, index) => (
                <figure key={index} className="rounded-md overflow-hidden">
                  <img
                    src={"http://localhost:5023/images/" + item.image}
                    alt=""
                  />
                </figure>
              ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default Gallery;
