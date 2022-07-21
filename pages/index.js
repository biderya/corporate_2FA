import React from "react";
import Image from "next/image";
import QRCode from "react-google-qrcode";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="border-l-2 border-[#22cda8] pl-4 mb-[52px]">
          <h1 className="font-bold text-2xl mb-3">Баталгаажуулах суваг</h1>

          <p className="text-sm w-[402px]">
            Хадгалаагүй төхөөрөмжөөс нэвтэрлээ. Та дараах сонголтуудын нэгээр
            баталгаажуулна уу.
          </p>
        </div>
        <Link href="/authCode" passHref>
          <button className="flex mb-2 w-[400px] h-16 rounded-lg bg-[#f4f6f8] items-center text-sm font-semibold">
            <div className="bg-white w-10 h-10 p-2 rounded-full ml-6 mr-3">
              <Image
                src={"/images/auto_logo.png"}
                alt="LOGOGOGOGOGOGO"
                height={"24px"}
                width={"24px"}
                data-aos-duration="1000"
                data-aos="zoom-in"
              />
            </div>
            Authenticator апп-аар код авах
          </button>
        </Link>
        <button className="flex mb-[59px] w-[400px] h-16 rounded-lg bg-[#f4f6f8] items-center text-sm font-semibold">
          <div className="bg-white w-10 h-10  rounded-full ml-6 mr-3">
            <Image
              src={"/images/Group 53421@3x.png"}
              alt="LOGOGOGOGOGOGO"
              height={"40px"}
              width={"40px"}
              data-aos-duration="1000"
              data-aos="zoom-in"
            />{" "}
          </div>
          Мессеж-ээр код авах
        </button>

        <div className="text-center">
          <button
            className={` bg-[#f4f6f8] mb-7 p-3 w-80 text-black font-bold rounded-lg hover:shadow-xl`}
          >
            Буцах
          </button>
        </div>
      </div>

      {/* <button onClick={clearValue}>Clear</button> */}
    </div>
  );
}
