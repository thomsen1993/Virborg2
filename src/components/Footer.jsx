import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 bg-neutral-700">
      <div className="flex justify-center gap-10 text-2xl">
        <a href="" className="rounded-full bg-neutral-600 p-2 text-lightGreen"><FaFacebookF /></a>
        <a href="" className="rounded-full bg-neutral-600 p-2 text-lightGreen"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
