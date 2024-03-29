"use client";

import React, { createContext, useState } from "react";

const contextdata = createContext();

// tabtrigers
const tabtriger = [
  { name: "All", value: "All" },
  { name: "Perfume", value: "Perfume" },
  { name: "Shoose", value: "Shoose" },
  { name: "Watches", value: "Watches" },
  { name: "Shirts", value: "Shirts" },
];

const shoppingdata = [
  { value: "All", name: "Perfume1", value: "onestar" },
  { value: "All", name: "Shoose1" },
  { value: "All", name: "Perfume2" },
  { value: "All", name: "Watches1" },
  { value: "All", name: "Perfume3" },
  { value: "All", name: "Shoose2" },
  { value: "All", name: "Watches2" },
  { value: "All", name: "Shirts1" },
  { value: "All", name: "Watches3" },
  { value: "All", name: "Shirts2" },
  { value: "All", name: "Shirts3" },
  { value: "Perfume", name: "Perfume1" },
  { value: "Perfume", name: "Perfume2" },
  { value: "Shoose", name: "Shoose1" },
  { value: "Shoose", name: "Shoose2" },
  { value: "Watches", name: "Watches1" },
  { value: "Watches", name: "Watches2" },
  { value: "Watches", name: "Watches3" },
  { value: "Shirts", name: "Shirts1" },
  { value: "Shirts", name: "Shirts2" },
  { value: "Shirts", name: "Shirts3" },
  { value: "Shirts", name: "Shirts4" },
];

const Approvider = ({ children }) => {
  const [shopping, setShopping] = useState(shoppingdata);
  const [tab, setTab] = useState(tabtriger);

  const apidata = {
    shopping,
    tab,
  };
  return (
    <div>
      <contextdata.Provider value={apidata}>{children}</contextdata.Provider>
    </div>
  );
};

export { Approvider, contextdata };
