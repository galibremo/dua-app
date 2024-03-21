"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export default function Categorie({
  setActiveTab,
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
  }, [activeTab, itemId]);

  async function handleSearchChange(e) {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      categoryData &&
      categoryData.filter((product) =>
        product.cat_name_en.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
    setActiveTab(-1);
    setSubCategoryData([]);
  }

  const scrollToTop = () => {
    const element = document.getElementById(subCatId);
    element?.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };

  function scrollTop() {
    const element = document.getElementById("scrollTop");
    element?.scrollIntoView({
      behavior: "smooth",
    });
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
          {searchTerm
            ? searchData.map((item, index) => (
                <div
                  id="test"
                  key={index}
                  className="flex flex-col mb-2 w-[330px] cursor-pointer px-2"
                >
                  <div
                    className="flex items-center gap-3 hover:bg-[#E8F0F5] rounded-lg p-2"
                    onClick={() =>
                      setItemId(item.cat_id) ||
                      setActiveTab(index) ||
                      scrollTop()
                    }
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
                  {activeTab === index &&
                    subCategoryData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm mb-1 gap-4 px-5 ml-3"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-1.5 min-w-1.5"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                        </div>
                        <div
                          onClick={() => {
                            const element = document.getElementById(
                              item.subcat_id
                            );
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                        >
                          {item.subcat_name_en}
                        </div>
                      </div>
                    ))}
                </div>
              ))
            : categoryData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col mb-2 w-[330px] cursor-pointer px-2"
                >
                  <div
                    className="flex items-center gap-3 hover:bg-[#E8F0F5] rounded-lg p-2"
                    onClick={() =>
                      setItemId(item.cat_id) ||
                      setActiveTab(index) ||
                      scrollTop()
                    }
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
                  {activeTab === index &&
                    subCategoryData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm mb-1 gap-4 px-5 ml-3"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-1.5 min-w-1.5"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                          <div className="bg-[#1FA15A] rounded-full min-h-[2px] min-w-[2px]"></div>
                        </div>
                        <div
                          onClick={() => {
                            const element = document.getElementById(
                              item.subcat_id
                            );
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                        >
                          {item.subcat_name_en}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
