import axios from "axios";
import React, { useEffect, useState } from "react";
import BottomBar from "./BottomBar";

export default function DuaCard({ itemId }) {
  const [dua, setDua] = useState([]);

  useEffect(() => {
    const fetchDua = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/dua/${id}`);
        setDua(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDua(itemId);
  }, [itemId]);

  return (
    <div className="w-full max-h-screen">
      <div className="h-[84vh] overflow-y-scroll rounded-xl">
        {dua &&
          dua.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 mb-5"
              id="scrollTop"
            >
              <div className="p-5 text-justify" id={item.subcat_id}>
                <div className="flex items-center gap-5">
                  <img src="https://duaruqyah.com/assets/duacard.svg" alt="" />
                  <h2 className="text-[#1FA45B] font-semibold">
                    {item?.id}.{item?.dua_name_en}
                  </h2>
                </div>
                <p className="py-5 text-lg">{item.top_en}</p>
                {item.dua_arabic && (
                  <p className="py-5 text-[33px] text-right">
                    {item.dua_arabic}
                  </p>
                )}
                {item?.transliteration_en && (
                  <p className="py-5 text-lg italic">
                    <span className="font-semibold">Transliteration: </span>
                    {item?.transliteration_en}
                  </p>
                )}
                {item?.translation_en && (
                  <p className="py-5 text-lg">
                    <span className="font-semibold">Translation: </span>
                    {item?.translation_en}
                  </p>
                )}
                <span className="text-[#1FA45B] font-semibold text-lg">
                  Refferance:
                </span>
                <br />
                <span className="font-semibold text-md">
                  {item?.refference_en}
                </span>
                <BottomBar item={item} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
