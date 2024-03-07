import React from "react";
import './Featured.css'

function Featured() {
  return (
    <>
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-[#b2b2b2] pb-20">
        <h1 className="text-6xl tracking-tight">Featured projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-20">
          <div className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className=" absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tighter text-[#cdea68]">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl bg-blue-500 overflow-hidden ">
                <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""/>
            </div>
            <div className="flex gap-2">
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6">AUDIT</a>
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6">COPYWRITING</a>
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6">SALES DECK</a>
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6">SLIDES DESIGN</a>
            </div>
          </div>

          <div className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className=" absolute right-full translate-x-1/4 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tighter text-[#cdea68]">
            {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-blue-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""/>
            </div>
            <div className="flex gap-2">
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6">AGENCY</a>
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6">COMPANY PRESENTATION</a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-20">
          <div className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className=" absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tighter text-[#cdea68]">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl bg-blue-500 overflow-hidden ">
                <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""/>
            </div>
            <div className="flex gap-2">
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6 uppercase">Brand Identity</a>
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6 uppercase">Design Research</a>
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6 uppercase">Investor Deck</a>
            </div>
          </div>

          <div className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className=" absolute right-full translate-x-1/4 top-1/2 -translate-y-1/2 z-[9] text-8xl font-bold tracking-tighter text-[#cdea68]">
            {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-blue-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""/>
            </div>
            <div className="flex gap-2">
            <a href="/buttons/43" class="btn41-43 btn-43 rounded-full overflow-hidden mt-6 uppercase">Branded Template</a>
            </div>
          </div>
        </div>
      </div>

    </div>
      <div className=" w-full h-56 bg-[#0f172a] flex justify-center items-center">
      <button className="px-6 py-4 mt-10 bg-white rounded-full text-[#0f172a] flex items-center gap-10">View all case studies
                <div className="w-2 h-2 bg-[#0f172a] rounded-full"></div></button>
      </div>
      </>
  );
}

export default Featured;
