import React from "react";
import "./Hero.css";
import img1 from "../../images/task_1.png";
function Hero() {
  return (
    <>
        <section className="w-[100%] h-[90vh] bg-[#20283f] flex justify-between  flex-wrap " id="hero" >
               <div className="w-[49%] h-[100%] flex justify-center items-center  flex-col left_item">
                      <h1 className="font-bold text-[#fff] text-[3rem] ilm_ziyo">ILM ZIYOSI </h1>
                          <p className="text-[#d99729] text-[2rem] ilm_ziyo">o'quv markazi</p>
                            </div>
                        <div className="w-[49%] h-[100%] flex justify-center items-center right_item">
                    <img src={img1} alt="ilz ziyosi" />
               </div>
        </section>
    </>
  );
}

export default Hero;
