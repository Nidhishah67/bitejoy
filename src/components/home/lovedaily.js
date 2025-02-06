import React from "react";
import lovedaily from "../../assets/lovedaily.webp";
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Lovedaily() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 p-6 pt-16  md:pt-28">
      <div className="flex justify-center">
        <img
          src={lovedaily}
          alt="Love Daily"
          className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] object-cover rounded-3xl shadow-lg border-4 border-gray-300"
        />
      </div>
      <div className="flex flex-col justify-start pt-10">
        <h1 className="text-5xl md:text-8xl font-black mb-2 leading-tight">MADE WITH</h1>
        <h1 className="text-5xl md:text-8xl font-black mb-2 leading-tight">
          LOVE <span className="text-5xl md:text-8xl relative"
            style={{
              color: '#FF5733', fontFamily: 'Comic Sans MS, cursive', fontWeight: 'bold',
              textShadow: '2px 2px 0 #000', WebkitTextStroke: '1px black',
              letterSpacing: '0.02em', lineHeight: '1.1', transform: 'rotate(-2deg)',
              display: 'inline-block'
            }}>
            Daily
          </span>
        </h1>
        <p className="text-black-500 text-lg pt-2">
          We believe that great food brings people together. Since day S
          one, our mission has been to serve up delicious, fresh, and 
          satisfying meals that put a smile on your face.
        </p>
        <p className="text-black-500 text-lg pt-2">
          We’re proud to be a fast food destination where convenience 
          meets taste, perfect for those who crave something quick 
          without compromising on quality.
        </p>
        <button onClick={() => {navigate('/about'); window.scrollTo(0, 0);}} className="mt-4 w-40 h-16 text-lg bg-pink-500 text-black font-bold border-2 border-black rounded-full border-b-4 border-r-4 flex items-center justify-center gap-2 hover:border-b-2 hover:border-r-2">
          ABOUT US
          <div className="bg-white-500 rounded-full p-1 flex items-center justify-center border-4 border-black-500">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    </div>
  );
}
