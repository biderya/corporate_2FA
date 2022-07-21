import React from "react";
import Image from "next/image";
import QRCode from "react-google-qrcode";
import Link from "next/link";

export default function Twofa() {
  return (
    <div>
      {" "}
      <div className="flex bg-slate-300 right-0">
        <div className="w-[356px] mr-7 bg-white"></div>
        <div className=" bg-white w-full pt-[21px] pb-[76] pl-8 rounded-md mr-5 mt-20 mb-10">
          <h1 className="font-semibold text-lg">Шилжүүлэг лавлах</h1>
          <div className="mt-[26px] ml-[26px]">
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
}
