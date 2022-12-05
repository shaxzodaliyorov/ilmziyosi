import React from "react";
import { NewsBase } from "./NewsBase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {useNavigate} from 'react-router-dom'
import './News.css'
function FullNews() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    NewsBase.forEach((item) => {
      if (String(item.id) === id) {
        setNews(item);
      }
    });
  }, []);
  const histroy = useNavigate()
  return (
    <div className="w-[100%] py-4 bg-[#2e3262]">
      <h1 className=" text-center font-bold text-[2rem] text-[#d99729] my-7">
        {news.title}
      </h1>
      <div className="wrapper">
        <div className="w-[750px] m-auto bg-[#414b90] rounded-[10px] full_wrap_card">
          <img
            src={news.img}
            alt=""
            className="w-[100%] h-[550px] object-cover rounded-[10px]"
          />
          <div className="px-3">
            <h2 className="my-4 text-[2rem] text-[#d99729]">{news.title}</h2>
          </div>
          <div className="px-3">
            <p className="text-[#fff] leading-9 text-[1.5rem]">
              {news.discription}
            </p>
          </div>
          <div className="w-100% flex justify-end px-7 py-4">
            <BsArrowLeft
              size={"2rem"}
              className="back text-[#fff] cursor-pointer" 
              onClick={()=>histroy(-1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullNews;
