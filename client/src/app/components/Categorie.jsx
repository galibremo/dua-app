"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export default function Categorie({
  setActiveTab,
  toggleTab,
  activeTab,
  itemId,
  setItemId,
}) {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
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

  useEffect(() => {
    const fetchSubCat = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/subcategories/${id}`
        );
        setSubCategoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubCat(itemId);
  }, [itemId]);

  function handleSearchChange(e) {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      categoryData &&
      categoryData.filter((product) =>
        product.cat_name_en.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  }


  return (
    <div className="w-[350px] h-[84vh] bg-white rounded-xl">
      <h1 className="text-center text-lg p-4 bg-[#1FA15A] rounded-t-xl ">
        Categories
      </h1>
      <div className="p-3 flex items-center relative">
        <FaSearch
          size={18}
          className="text-slate-400 absolute left-8 cursor-pointer"
        />
        <input
          id="filerted_catList"
          className="h-12 border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm"
          placeholder="Search Categories"
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="h-[65vh] overflow-y-scroll">
          {searchData
            ? searchData.map((item, index) => (
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
              ))
            : categoryData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col mb-2 hover:bg-[#E8F0F5] p-4 rounded-lg w-[310px] cursor-pointer"
                  onClick={() => setItemId(item.cat_id) || toggleTab(index)}
                >
                  <div className="flex items-center gap-3">
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
                  {activeTab === index &&
                    subCategoryData.map((item, index) => (
                      <div key={index} className="text-sm p-2 mb-1">
                        {item.subcat_name_en}
                      </div>
                    ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
