import React from "react";

function Footer() {
  return (
    <div className="w-full h-screen bg-[#0f172a]  flex ">
      <div className=" w-1/2 h-full">
        <h1 className="font-bold text-[6vw] w-[28vw] ml-16">EYE-OPENING</h1>
        <h1 className=" font-bold text-[5vh] mt-[22vw] ml-16 inline-block">Ochi</h1>
      </div>

      <div className="w-1/2 h-full">
        <h1 className="font-bold text-[6vw] w-[28vw] ml-1">PRESENTATIONS</h1>


        <div className="mt-[2vw] ml-[1vw] inline-block">
          <span>S:</span> <br /> <br />
          <lu className="list-none underline">
            <li className="">
              <a className="" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </lu>
        </div> <br />

        <div className="mt-[2vw] ml-[1vw] inline-block ">
          <span>L:</span> <br /> <br />
          <lu className="list-none underline">
            <li className="">
              <a className="" href="#">
              202-1965 W 4th Ave <br />Vancouver, Canada

              </a>
            </li> <br />
            <li>
              <a href="#">30 Chukarina St <br /> Lviv, Ukraine</a>
            </li>
          </lu>
        </div> <br/>

        <div className=" ml-[1vw] mb-10 inline-block overflow-hidden">
          <span>E:</span> <br /> <br />
          <lu className="list-none underline">
            <li className="">
              <a className="" href="#">
              hello@ochi.design

              </a>
            </li> 
          </lu>
        </div>

        <div className="relative -top-[12vw] left-[25vw] inline-block ">
          <span>M:</span> <br /> <br />
          <lu className="list-none underline">
            <li className="">
              <a className="" href="#">
              Home
              </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Our work</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </lu>
        </div> 


      </div>
    </div>
  );
}

export default Footer;
