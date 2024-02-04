import React from "react";
import fotoImg from './../Share/фото (3).png'

export default function Header() {
  return (
    <div className="absolute top-0 right-0 m-4">
      <div className="bg-white w-64 h-16 flex items-center p-2 rounded-lg">
        <img src={fotoImg} alt="" className="rounded-full w-12 h-12 mr-2 border border-gray-300"/>
        <span className="text-gray-700">Максим Добжанский</span>
      </div>
    </div>
  );
}