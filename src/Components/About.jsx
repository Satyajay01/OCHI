import React from "react";

function About() {
  return (
    <>
      <div className=" w-full bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-['Neue_Montreal'] text-5xl w-[75vw] pt-[7vw] pl-[3vw] ">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className=" h-[24vw] mt-16 border-t-[2px] border-b-[2px] border-[#99ad53] flex w-full ">
          <div className="h-full w-[50%] text-black pl-[3vw] pt-4 font-normal">
            What you can expect:
          </div>

          <div className="h-full w-[50%] flex">
            <div className="h-full w-[50%]">
              <p className="text-black text-[17px] font-normal w-[21vw] mt-4">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it's live or digital,
                delivered for one or a hundred people.
              </p>
              <p className="text-black text-[17px] font-normal w-[20vw] mt-8">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
            <div className=" h-full w-[50%] pt-24 pl-24 text-black text-[17px]  ">
              <span>S:</span> <br /> <br />
              <lu className="list-none underline">
                <li className="">
                  <a className="" href="">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="">Behance</a>
                </li>
                <li>
                  <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Linkedin</a>
                </li>
              </lu>
            </div>
          </div>
        </div>

        <div className="h-[37.5vw] flex w-full">
            <div className="h-full w-[50%] pl-[3vw]">
                <h1 className="text-6xl pt-4">Our approach:</h1>
                <button className="px-6 py-4 mt-10 bg-[#0f172a] rounded-full text-white flex items-center gap-10">READ MORE
                <div className="w-2 h-2 bg-[#ffffff] rounded-full"></div></button>
            </div>
            <div className="h-full w-[50%] flex justify-start items-center">
                <img className="rounded-xl h-[72vh] w-[100vh]" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
            
        </div>

      </div>
    </>
  );
}

export default About;
