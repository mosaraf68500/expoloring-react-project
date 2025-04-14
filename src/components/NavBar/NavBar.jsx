import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const data = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];
const NavBar = () => {
  
  const link=data.map((route) => (
    <Link key={route.id} route={route}></Link>
  ))

  const[open,setOpen]=useState(false);
  return (
    <nav className="flex justify-between mx-10 mt-2">
      <span onClick={()=>setOpen(!open)} className="flex gap-2">
       {
         open? 
         <X className="md:hidden"></X>
         :<Menu className="md:hidden" />
       }
        <ul className="md:hidden ">
            {link}
        </ul>
        <h1>My Navbar</h1>
      </span>
      <ul className="md:flex  hidden">
        {
            link
        }
      </ul>

      <button>signIn</button>
    </nav>
  );
};

export default NavBar;
