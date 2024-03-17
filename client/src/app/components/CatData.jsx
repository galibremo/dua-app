"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CatData() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/categories"
        );
        setCategoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {categoryData &&
        categoryData.map((item, index) => (
          <div
            key={index}
            className="flex mb-2 hover:bg-[#E8F0F5] p-4 rounded-lg w-[310px] cursor-pointer gap-3 items-center"
          >
            <div className="bg-slate-200 rounded-lg p-3">
              <img
                src="https://duaruqyah.com/assets/icon/duar_gurutto.svg"
                alt=""
                className="rounded-lg w-10 h-10"
              />
            </div>
            <div className="flex justify-between w-full">
              <div>
                <h1 className="font-semibold">{item.cat_name_en}</h1>
                <span className="text-xs text-[#7E7E7E]">
                  Subcategory : {item.no_of_subcat}
                </span>
              </div>
              <div>
                <h1 className="font-semibold">{item.no_of_dua}</h1>
                <span className="text-xs text-[#7E7E7E]">Dua</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
