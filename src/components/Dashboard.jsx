import React from "react";
import messegeImg from './../components/messege (2).png'

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="lg:ml-[720px]">
        <img className="w-full" src={messegeImg} alt=""/>
      </div>
      <h1 className="lg:w-76 lg:h-21 absolute top-103 left-381 font-bold text-2xl font-medium leading-21 tracking-0 text-left mt-5 lg:ml-20">
        Главная
      </h1>
    </div>
  );
}