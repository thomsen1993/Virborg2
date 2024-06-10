"use client";

import React, { useEffect, useState } from "react";
import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import Form from "@/components/Form";

const page = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataDel, makeRequest: makeRequestDel } = useRequestData();
  const { makeRequest: makeRequestPut, data: dataPut } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5023/services", "GET", null);
  }, [dataDel, dataPut]);

  const handleDelete = (ID, author) => {
    if (window.confirm("Er du sikker på at du vil slette: " + author)) {
      makeRequestDel(
        "http://localhost:5023/services/admin/" + ID,
        "DELETE",
        null
      );
    }
  };

  const [editer, setEditer] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleEditClick = (item) => {
    setEditer(item._id);
    setFormData({
      title: item.title,
      image: item.image,
      content: item.content,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = (e, itemId) => {
    e.preventDefault();
    makeRequestPut(
      "http://localhost:5023/services/admin/" + itemId,
      "PUT",
      formData
    ).then(() => {
      setEditer(null);
    });
  };

  return (
    <section className="my-20 wrapper">
      {isLoading && <Loader />}
      {error && <Error />}
      {data && (
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center border-b border-lightGreen"
            >
              <div className="col-span-2 grid my-5">
                <div className="col-start-1 row-start-1 bg-white/70 pl-5">
                  <p>{item.title}</p>
                  <p
                    className="my-10"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
                <img
                  src={"http://localhost:5023/images/" + item.image}
                  alt={item.title}
                  className="col-start-1 row-start-1 rounded-r-full w-40 h-52 object-cover -z-10"
                />
              </div>
              <div className="flex justify-center gap-5">
                <div className="cursor-pointer group relative overflow-hidden">
                  <FaRegEdit
                    size={20}
                    className="absolute top-0 group-hover:-top-5 transition-all"
                  />
                  <p className="absolute top-5 group-hover:top-0 transition-all">
                    Rette
                  </p>
                  <p
                    className="opacity-0"
                    onClick={() => handleEditClick(item)}
                  >
                    Rette
                  </p>
                </div>
                <div className="cursor-pointer group relative overflow-hidden">
                  <FaRegTrashAlt
                    size={20}
                    className="absolute top-0 group-hover:-top-5 transition-all"
                  />
                  <p className="absolute top-5 group-hover:top-0 transition-all">
                    Slette
                  </p>
                  <p
                    onClick={() => handleDelete(item._id, item.title)}
                    className="opacity-0"
                  >
                    Slette
                  </p>
                </div>
              </div>
              {editer === item._id && (
                <Form
                  handleSubmit={(e) => handleSubmit(e, item._id)}
                  titleFormData={formData.title}
                  imgFormData={formData.image}
                  contentFormData={formData.content}
                  handleInputChange={handleInputChange}
                />
              )}
            </div>
          ))}
          <Link
            href="/"
            className="flex items-center text-lightGreen hover:text-darkGreen"
          >
            <FaAngleLeft />
            Tilbage
          </Link>
        </div>
      )}
    </section>
  );
};

export default page;
