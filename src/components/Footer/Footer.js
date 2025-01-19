import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="bg-background-tertiary text-copy-primary flex flex-row sm:flex-col sm:text-center sm:justify-around justify-between bg-gray-800 h-20">
      <div className="container flex flex-col justify-center ml-12 sm:ml-0">
        <p className="text-gray-100 text-sm sm:text-xs mb-1">
          Developed By Muhammad Yasir
        </p>
      </div>
    </div>
  );
}

export default Footer;
