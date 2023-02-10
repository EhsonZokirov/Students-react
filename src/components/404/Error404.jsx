import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <div className="text-center py-48 text-[50px] font-bold">
        <span className="bg-green-100 text-white px-40 py-2 rounded-xl"> Error404 </span>
      </div>
      <h1 className="text-center relative bottom-40 hover:text-blue-500 ">
        <Link to="/Glavnaya"> вернуться на главную страницу </Link>
      </h1>
    </div>
  );
}

export default Error404;
