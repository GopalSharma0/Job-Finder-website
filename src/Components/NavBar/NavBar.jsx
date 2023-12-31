import React from "react";

const NavBar = () => {
  return (
    <div className="NavBar flex justify-between item-center p-[3rem] ">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">     
         <strong>Job</strong> Search
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">about</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contect</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>

      </div>
    </div>
  );
};

export default NavBar;
