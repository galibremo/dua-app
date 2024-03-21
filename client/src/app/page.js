"use client";
import React, { useState } from "react";
import SideBar from "./components/SideBar";
import DuaCard from "./components/DuaCard";
import Categorie from "./components/Categorie";
import Header from "./components/Header";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [itemId, setItemId] = useState(1);

  return (
    <div className="w-full max-h-screen flex p-1 bg-[#ebeef2]">
      <div className="p-5">
        <SideBar />
      </div>
      <div className="flex flex-col w-full p-3">
        <Header />
        <div className="flex gap-5">
          <Categorie
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            setItemId={setItemId}
            itemId={itemId}
          />
          <DuaCard itemId={itemId} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
