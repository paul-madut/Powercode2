import React from "react";

const NavBar: React.FC = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-vs-light-gray absolute top-0 w-screen">
      <h1 className="text-2xl font-bold text-[#2babf1]">PowerCode</h1>
      <nav>
        <h2 className=" font-bold text-white">
          {localStorage.getItem("username")}
        </h2>
      </nav>
    </header>
  );
};

export default NavBar;
