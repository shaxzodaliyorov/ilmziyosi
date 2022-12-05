import React from "react";
import img1 from "../../images/tutor-5.png";
import './About.css'
function About() {
  return (
    <div className="w-100% py-[4rem] bg-[#2e3262]">
         <h1 className="text-[#fff] text-3xl text-center mb-[1rem] ilm_ziyo"  data-aos="zoom-in" >ABOUT</h1>          
             <div className="wrapper">
                  <div className="w-[100%] flex justify-between flex-wrap">
                        <div className="w-[49%] about_left_item" data-aos="fade-right" >
                             <h1 className="text-6xl my-6 text-[#d99729] ilm_ziyo">Ilm Ziyosi</h1>
                                  <p className="text-[#fff] tracking-wide font-4xl leading-[35px] ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                    vel, incidunt hic commodi illum cum et voluptatibus atque eaque
                                        unde impedit. Molestiae suscipit labore neque error veritatis
                                        libero temporibus adipisci possimus porro ab! Labore, quos? Enim
                                        quo voluptatibus doloribus provident nobis magnam neque molestiae
                                        officia nam non cupiditate voluptas id animi, asperiores eos dolor
                                        officiis culpa deleniti vero consequatur fuga? Neque vero tenetur
                                        rerum illo consequuntur alias dicta cum distinctio adipisci
                                        accusantium! Pariatur quod autem excepturi repellendus nulla esse
                                        commodi quaerat assumenda suscipit ex dicta quos repellat nisi
                                    ipsum aliquam, maxime minus sint est odio hic facilis. Esse, ullam
                                    consequatur!
                                  </p>
                              </div>
                          <div className="w-[49%] flex justify-end items-center about_right_item" data-aos="fade-left" >
                         <img src={img1} alt="ilmziyosi" className="w-[450px] h-[450px] object-cover rounded-[15px]" />
                    </div>
                </div>
            </div>
      </div>
  );
}

export default About;
