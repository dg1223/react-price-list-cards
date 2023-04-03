import React, { useState } from "react";
import Link from "../Link/Link";
import { BeakerIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Services", path: "/services" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div onClick={() => setOpen(!open)}>
        <Bars3Icon className="h-6 w-6 text-purple-500" />
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
