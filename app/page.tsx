"use client";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [clickedItems, setClickedItems] = useState<Record<string | number, boolean>>({});

  const handleClicked = (id: string | number) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const data = [
    {
      id: 1,
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades",
      image: "/image-retro-pcs.jpg",
    },
    {
      id: 2,
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets",
      image: "/image-top-laptops.jpg",
    },
    {
      id: 3,
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities",
      image: "/image-gaming-growth.jpg",
    },
  ];

  const datalist = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars even even catch up to EVs"
    },
    {
      id: 2,
      title: "The downside of AI Atistry",
      description: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up",
      description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
  ]

  return (
    <div>
      <Navbar />

      <div className="   flex-col px:1 md:gap-4 md:px-60 py-2">
        <div className=" px-2 flex flex-col md:flex-row gap-10">
          {/* Web3.0 Section */}
          <div className=" w-full  flex flex-col md:px-0 md:w-2/3 md:flex-1 gap-1 ">
            <div className=" h-60 w-full">
              <Image
                src="/image-web-3-desktop.jpg"
                alt="desktop"
                width={400}
                height={4}
                className="px-2 md:px-0 w-full h-full"
              />
            </div>
            <div className=" flex flex-col md:flex-row md:items-center justify-evenly p-2">
              <div className="flex flex-col md:flex-1 text-6xl font-semibold">
                The Bright <br /> future of<br /> Web3.0
              </div>
              <div className="flex flex-1 flex-col gap-3 justify-between px-1">
                <div className="text-xl">
                  <h1>
                    We have to dive into the next evolution of web that claims
                    to put the power of the platform back into the hands of the
                    people. But is it really fulfilling its promise?
                  </h1>
                </div>
                <div>
                  <button
                    onClick={() => handleClicked("web3")}
                    className={
                      clickedItems["web3"]
                        ? "bg-red-400 text-black px-7 py-3 font-semibold"
                        : "bg-black/90 text-white px-7 py-3 font-semibold"
                    }
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full px-2 rounded-sm flex flex-col gap-1  bg-black text-white md:w-1/3 md:p-4 justify-between ">
            <h1 className="text-yellow-600 font-bold text-5xl py-2">New</h1>
            <div className="flex flex-col justify-evenly  flex-1">
              {datalist.map((item, index) => (
                <div key={item.id} 
                className={` ${index > 0 && index < datalist.length - 1 ? "border-t border-b border-gray-300 py-3" : ""}`}
  >
                  <h2 className="text-xl  hover:text-yellow-600 cursor-pointer pb-2">{item.title}</h2>
                  <p className="text-purple-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card List Section */}
        <div className="px-2 py-10 w-full md:px-0 grid grid-col-1 md:grid-cols-3 gap-2">
          {data.map((item) => (
            <div className=" flex flex-row gap-2 justify-even" key={item.id}>
              <div className="w-1/3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={4}
                  className="h-full w-full "
                />
              </div>
              <div className="flex flex-col gap-2 px-2 justify-between">
                <h1 className="text-3xl font-semibold text-red-500">
                  0{item.id}
                </h1>
                <h1
                  onClick={() => handleClicked(item.id)}
                  className="text-2xl font-semibold cursor-pointer hover:text-red-500" >
                  {item.title}
                </h1>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
