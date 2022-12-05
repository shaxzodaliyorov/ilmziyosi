import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../images/course-1.svg";
import img2 from "../../images/course-2.svg";
import img3 from "../../images/course-3.svg";
import img4 from "../../images/course-4.svg";
import img5 from "../../images/course-5.svg";
import img6 from "../../images/course-6.svg";
import './Course.css'
function Course() {
  const Swap = [
    {
      imgurl: img6,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "MATEMATIKA",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
    {
      imgurl: img1,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "ONA-TILI",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
    {
      imgurl: img2,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "ADOBIYOT",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
    {
      imgurl: img3,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "BIOLOGIYA",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
    {
      imgurl: img4,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "INGIS-TILI",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
    {
      imgurl: img5,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "RUS-TILI",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
    {
      imgurl: img6,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "DASTURLASH",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
    {
      imgurl: img6,
      imgClass: "rounded-[15px] h-[270px] w-[100%] ",
      fan: "GEOGRAFIYA",
      h2Class: " text-center text-[#d99729] my-4",
      discription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, incidunt",
    },
  ];

  return (
    <div className="w-[100%] py-[7.5rem] bg-[#2e3262]">
         <h1 className="text-[#fff] text-3xl text-center mb-[2rem] ilm_ziyo" data-aos="zoom-in" >
              Course
                </h1>
                <div className="wrapper">
                   <Swiper slidesPerView={2} spaceBetween={30} pagination={{clickable: false, }} modules={[Pagination]} className="mySwiper" data-aos="zoom-in" >
                       {Swap.map((item, index) => {
                         return (
                           <SwiperSlide className="rounded-[15px] bg-[#414b90]" key={index}  >
                           <img src={item.imgurl} alt="ilmziyosi" className="rounded-[15px] h-[270px] w-[100%] "/>
                          <h2 className=" text-center text-[#d99729] my-4">{item.fan}</h2>
                      </SwiperSlide>
                     );
                 })}
            </Swiper>
        </div>
    </div>
  );
}

export default Course;
