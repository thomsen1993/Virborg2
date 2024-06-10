"use client";

import { useEffect, useState } from "react";
import useRequestData from "@/hooks/useRequestData";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import Underlines from "../Underlines";
import Btn from "../Btn";

const contact = () => {
  const titles = {
    title: "Kontakt os",
    text: "Du kan kontakte os med informationerne nedenfor, eller skive en besked til os med kontaktformularen.",
    address: "addresse",
    openhours: "åbningstid",
    contactinformation: "kontakt information",
    contact: "send os en besked",
  };

  const { data, isLoading, error, makeRequest } = useRequestData();
  const { makeRequest: postMakeRequest } = useRequestData();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [besked, setBesked] = useState("");
  const [message, setMessage] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5023/contacts", "GET", null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postItem = {
      navn: name,
      email: email,
      besked: besked,
    };
    postMakeRequest("http://localhost:5023/contactform/", "POST", postItem);

    setMessage(true);

    setTimeout(() => {

      location.reload()

    }, 4000);
  };

  return (
    <section className="text-center bg-neutral-100 py-20" id="contact">
      {isLoading && <Loader />}
      {error && <Error />}
      {data && (
        <div className="wrapper">
          <Underlines color={"lightGreen"}>
            <h2 className="text-primaryTitle">{titles.title}</h2>
          </Underlines>
          <p className="text-secondaryText">{titles.text}</p>
          <div className="grid grid-cols-3 my-20">
            <div>
              <Underlines color={'white'}>
                <h4 className="uppercase">{titles.address}</h4>
              </Underlines>
              <address
                dangerouslySetInnerHTML={{ __html: data.address }}
                className="text-secondaryText"
              ></address>
            </div>
            <div>
              <Underlines color={"white"}>
                <h4 className="uppercase">{titles.openhours}</h4>
              </Underlines>
              <address
                dangerouslySetInnerHTML={{ __html: data.openhours }}
                className="text-secondaryText"
              ></address>
            </div>
            <div>
              <Underlines color={"white"}>
                <h4 className="uppercase">{titles.contactinformation}</h4>
              </Underlines>
              <address
                dangerouslySetInnerHTML={{ __html: data.contactinformation }}
                className="text-secondaryText"
              ></address>
            </div>
          </div>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <h5 className="text-xl text-center uppercase my-10 text-primaryTitle">
              {titles.contact}
            </h5>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <input
                type="text"
                name=""
                id=""
                placeholder="Navn"
                onInput={(e) => setName(e.target.value)}
                className="px-3 py-2"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                onInput={(e) => setEmail(e.target.value)}
                className="px-3 py-2"
                required
              />
              <textarea
                name=""
                rows={5}
                placeholder="Besked"
                onInput={(e) => setBesked(e.target.value)}
                className="px-3 py-2 col-span-2"
                required
              ></textarea>
            </div>
            {message && <p className="animate-bounce px-2 py-1 mb-1">Besked sendt, tak! 😉</p>}
            <button>
              <Btn text={"send besked"} />
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default contact;
