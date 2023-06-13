import Image from "next/image";
import Images from "../layout/images";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";

export default function Landing() {
  return (
    <>
      <div className="flex flex-col ml-24 items-center z-10 w-full max-w-3xl px-5 xl:px-0 mr-auto mb-28">
        <h1
          className="animate-fade-up bg-gradient-to-br from-green-400 to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer className=" ml-8">Unveil Your Timeless Journey</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer className=" ml-3">
            Open the doors to long-lost recollections and bring forgotten moments back to life.
          </Balancer>
        </p>
        <button className="flex items-center border rounded bg-gradient-to-br from-green-400 via-green-200 to-stone-300 text-white text-xl mt-6 ml-6 pl-6 pr-6 pt-1 pb-1 hover:bg-gradient-to-br hover:from-green-200 hover:via-stone-300 hover:to-green-300 hover:text-white transition-duration-300">
          <span className="flex-shrink-0">Try it</span>
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
          </svg>
        </button>
      </div>
      <Images />

    </>
  )
}
