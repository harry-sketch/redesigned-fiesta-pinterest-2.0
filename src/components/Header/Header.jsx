import React from "react";
import { FaPinterest } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import useAppProvider from "../../hooks/useAppProvider";

const Header = () => {
  const { handleSearch } = useAppProvider();
  const handleSubmit = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <div className="p-[1%] flex items-center">
      <FaPinterest className="text-red-600 text-3xl" />
      <div className="text-black text-base font-medium ml-4">Home</div>
      <div className="flex-1 bg-white rounded-3xl mx-4 p-4 items-center">
        <FiSearch className="inline text-gray-400 mb-1" />
        <input
          type="text"
          className="bg-transparent outline-none  ml-2  w-[50%] "
          placeholder="Search..."
          onChange={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
};

export default Header;
