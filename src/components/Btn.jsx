import React from "react";
import Link from "next/link";

const Btn = ({ text, href }) => {
  return (
    <Link
      href={href ? href : "#"}
      className="uppercase text-secondaryTitle py-2 px-3 inline-block w-max bg-lightGreen rounded-md hover:bg-darkGreen"
    >
      {text}
    </Link>
  );
};

export default Btn;
