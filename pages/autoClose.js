import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {" "}
      <div className="flex bg-slate-300 right-0">
        <div className="w-[356px] mr-7 bg-white"></div>
        <div className="w-[1508px] bg-white pt-[21px] pr-[849px] pb-[76] pl-8 rounded-md mr-5 mt-20 mb-10">
          <div className="border-l-2 border-[#22cda8] -ml-[32px] pl-8">
            <h1 className="font-semibold text-lg">Two-Factor Authentication</h1>
          </div>

          <div className="mt-6">
            <p className="leading-normal text-sm mr-[139px] w-[488px] mb-6">
              Давхар баталгаажуулалт нь хадгалаагүй төхөөрөмжөөс нэвтрэх
              тохиолдолд болон өндөр дүнтэй гүйлгээ хийхэд ашиглагдана.
            </p>
            <Link href="/" passHref>
              <button className="bg-[#f07470] rounded-lg text-sm text-white font-bold w-[317px] h-[50px] py-4 px-12 mb-[720px]">
                Google Authentication унтраах
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
