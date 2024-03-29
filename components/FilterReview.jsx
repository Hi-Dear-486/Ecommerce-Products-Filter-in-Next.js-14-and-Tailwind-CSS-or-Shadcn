"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiBoxList } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import { contextdata } from "../contextapi";
import { useContext, useState } from "react";
const FilterReview = () => {
  const [toggle, setToggle] = useState(true);
  const { shopping, tab } = useContext(contextdata);
  return (
    <div>
      <Tabs defaultValue="All" className="w-full">
        <div className=" shadow-[rgba(0,0,0,0.35)_0px_5px_15px] flex justify-center">
          <TabsList>
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? <MdGridView /> : <CiBoxList />}
            </button>
            <div className="ml-4">
              {tab.map((items, i) => {
                const { value, name } = items;
                return (
                  <TabsTrigger value={value} key={i}>
                    {name}
                  </TabsTrigger>
                );
              })}
            </div>
          </TabsList>
        </div>
        <div
          className="container grid place-items-center mt-4"
          style={{
            gridTemplateColumns: toggle
              ? "repeat(auto-fill,minmax(250px,1fr))"
              : "repeat(1,minmax(250px,1fr)",
          }}
        >
          {shopping.map((items, i) => {
            const { value, name } = items;
            return (
              <TabsContent
                value={value}
                key={i}
                className="item"
                style={{ width: toggle ? "15rem" : "50%" }}
              >
                {name}
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default FilterReview;
