import React from "react";
import { NewsBase } from "./NewsBase";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./News.css";
import { useState } from "react";
function News({ homePage }) {
  const [Map, setMap] = useState(
    homePage ? [NewsBase[0], NewsBase[1], NewsBase[2]] : NewsBase
  );
  return (
    <div className=" w-[100%] py-[4rem] bg-[#2e3262] ">
      <h1 className="text-[#fff] text-3xl text-center mb-[2rem] ilm_ziyo">
        News
      </h1>
      <div className="wrapper">
        <div className="w-[100%] flex justify-between flex-wrap wrap_card">
          {Map.map((item, index) => {
            return (
              <div
                className="w-[30%] my-3 rounded-[15px] bg-[#414b90] news-card"
                key={item.id}
                data-aos={item.aos}
              >
                <div>
                  <img
                    src={item.img}
                    alt="ilmziyosi"
                    className="w-[100%] h-[350px] object-cover rounded-[15px]"
                  />
                  <div className="w-[100%] px-3">
                    <h2 className="text-center my-4 text-[#d99729] text-bold text-lg">
                      {item.title}
                    </h2>
                    <p className="text-[#fff] text-justify leading-7">
                      {item.discription.slice(0, 120)}...
                    </p>
                    <div className="w-[100%] flex justify-end">
                      {" "}
                      <Link to={"/news/"+item.id+"/"+item.title.replace(/\s/gi,"-")} className="mb-3 mx-4 more">
                        <BsArrowRight size={"2rem"} className='back' />{" "}
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
