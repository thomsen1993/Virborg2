"use client";

import { useState, useEffect, useRef } from "react";
import useRequestData from "@/hooks/useRequestData";
import Link from "next/link";
import { FaAngleLeft, FaCheck } from "react-icons/fa";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const page = () => {
  const { makeRequest, data } = useRequestData();

  const refQuill = useRef(null);
  const toolbarOptions = [["bold", "italic"], [{ list: "ordered" }]];

  const handleNewSubmit = (e) => {
    e.preventDefault();
    const newPost = new FormData(e.target);
    newPost.append("content", refQuill.current.value);
    makeRequest("http://localhost:5023/services/admin", "POST", newPost);
    setDone(true);
  };

  useEffect(() => {
    if (data) {
      document.forms[0].reset();
      refQuill.current.getEditor().setText("one more?");
    }
  }, [data]);

  const [done, setDone] = useState(false);

  return (
    <section className="wrapper my-20">
      <h1 className="mb-10 text-center">Ny Ydelser</h1>
      <form
        action=""
        onSubmit={handleNewSubmit}
        className="flex flex-col p-10 border shadow-lg"
      >
        <label>
          <h2 className="text-lightGreen text-xl">Title: </h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            className="border-b border-gray-300 my-2 py-1 w-full"
          />
        </label>
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <label>
            <h2 className="text-lightGreen text-xl">Indhold: </h2>
            <ReactQuill
              theme="snow"
              modules={{ toolbar: toolbarOptions }}
              ref={refQuill}
            />
          </label>
          <label>
            <input
              type="file"
              name="image"
              id=""
              className="border cursor-pointer"
            />
          </label>
        </div>
        <div className="flex items-center justify-around">
          <Link
            href="/"
            className="flex items-center text-lightGreen hover:text-darkGreen"
          >
            <FaAngleLeft />
            Tilbage
          </Link>
          <button type="submit" className="btn">
            Ret
          </button>
        </div>
        {done && (
          <div className="flex items-center mx-auto">
            <FaCheck />
            <p className="pl-2">Done! 😉</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default page;
