import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="w-[100%]  py-[2rem] bg-[#2e3262]">
      <h1 className="text-[#fff] text-3xl text-center mb-[2rem] ilm_ziyo">
        News
      </h1>
      <div className="wrapper">
        <div className="w-[650px] py-[1rem] px-10 m-auto bg-[#414b90] rounded-[5px] contact_wrap">
          <form action="">
            <input
              data-aos="fade-right"
              type="text"
              placeholder="FirstName"
              className="w-[100%] text-[#fff] border-[#d99729] rounded-[4px] outline-none py-[.5rem] px-[5px] bg-transparent border-2 my-5"
            />
            <input
              data-aos="fade-left"
              type="number"
              placeholder="Telefon Number"
              className="w-[100%] text-[#fff] border-[#d99729] rounded-[4px] outline-none py-[.5rem] px-[5px] bg-transparent border-2 my-5"
            />
            <input
              data-aos="fade-right"
              type="number"
              placeholder="Age"
              className="w-[100%] text-[#fff] border-[#d99729] rounded-[4px] outline-none py-[.5rem] px-[5px] bg-transparent border-2 my-5"
            />
            <select
              data-aos="fade-left"
              value="dasturlash"
              className=" w-[100%] text-[#d99729] border-[#d99729] rounded-[4px] outline-none py-[.5rem] px-[5px] bg-transparent border-2 my-5 "
            >
              <option value="matematika">MATEMATIKA</option>
              <option value="ona-tili">ONA-TILI</option>
              <option value="adobiyot">ADOBIYOT</option>
              <option value="biologiya">BIOLOGIYA</option>
              <option value="ingis-tili">INGIS-TILI</option>
              <option value="rus-tili">RUS-TILI</option>
              <option value="dasturlash">DASTURLASH</option>
              <option value="geografiya">GEOGRAFIYA</option>
            </select>
            <textarea
              data-aos="fade-right"
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Message"
              className=" resize-none w-[100%] border-[#d99729] text-[#fff] rounded-[4px] outline-none py-[.5rem] px-[5px] bg-transparent border-2 my-5"
            ></textarea>
            <button className="w-[100%] py-[.5rem] rounded-[4px] bg-[#d99729] text-[#fff] ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
