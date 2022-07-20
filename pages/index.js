import React from "react";

import Image from "next/image";
import QRCode from "react-google-qrcode";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);
  return (
    <div>
      {" "}
      <div className="flex bg-slate-300 right-0">
        <div className="w-[356px] mr-7 bg-white"></div>
        <div className="w-[1508px] bg-white pt-[21px] pr-[849px] pb-[76] pl-8 rounded-md mr-5 mt-20 mb-10">
          <h1 className="font-semibold text-lg">Two-Factor Authentication</h1>
          <div className="mt-6">
            <p className="leading-normal text-sm mr-[139px] w-[488px]">
              Давхар баталгаажуулалт нь хадгалаагүй төхөөрөмжөөс нэвтрэх
              тохиолдолд болон өндөр дүнтэй гүйлгээ хийхэд ашиглагдана.
            </p>
            <div className="grid grid-rows-12">
              <div className="row-span-4 ">
                <h3 className="font-bold text-sm pt-12 pb-8">
                  Алхам 1: Google Authenticator app татаж суулгах
                </h3>
                <div className="flex font-medium  items-center">
                  <label className="bg-slate-200 p-3 h-14 w-[248px] rounded-lg flex items-center mr-4">
                    <Image
                      src={"/images/auto_logo.png"}
                      alt="LOGOGOGOGOGOGO"
                      height={"34px"}
                      width={"34px"}
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                    />
                    <p className="text-sm ml-2">IOS хувилбар татах</p>
                  </label>
                  <div className="mr-[60px]">
                    <div onClick={() => setShowModal(true)}>
                      <Image
                        src={"/images/qr-code@3x.png"}
                        alt="LOGOGOGOGOGOGO"
                        height={"17px"}
                        width={"17px"}
                        data-aos-duration="1000"
                        data-aos="zoom-in"
                      />
                    </div>
                  </div>

                  <label className="bg-slate-200 p-3 h-14 w-[248px] rounded-lg flex items-center mr-4">
                    <Image
                      src={"/images/auto_logo.png"}
                      alt="LOGOGOGOGOGOGO"
                      height={"34px"}
                      width={"34px"}
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                    />

                    <p className="text-sm ml-2">Android хувилбар татах</p>
                  </label>
                  <div onClick={() => setShowModal1(true)}>
                    <Image
                      src={"/images/qr-code@3x.png"}
                      alt="LOGOGOGOGOGOGO"
                      height={"17px"}
                      width={"17px"}
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                    />
                  </div>
                </div>
              </div>
              <div className="row-span-4 my-12 ">
                <h3 className="font-bold  text-sm">Алхам 2: Profile үүсгэх</h3>
                <p className="text-sm my-6">
                  Google Authenticator аппликейшнээ нээсний дараа + товч дээр
                  дарж профайл нэмнэ.
                  <br /> Та QR уншуулах эсвэл код оруулж тохируулах боломжтой.
                </p>
                <div className="flex items-center ">
                  <QRCode data="https://www.google.com" size={180} />
                  <h1 className="uppercase text-2xl font-semibold text-center w-72">
                    7xuyfdhkf fghf fgjhfghfg fghgfh
                  </h1>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "7xuyfdhkf fghf fgjhfghfg fghgfh"
                      )
                    }
                    className="font-semibold text-gray-400 text-sm"
                  >
                    Хуулах
                  </button>
                </div>
              </div>
              <div className="row-span-4 grid grid-cols-1 ">
                <h3 className="font-bold mb-8 text-sm">
                  Алхам 3: Google Authenticator аппликейшний үүсгэсэн 6 оронтой
                  нууц кодыг оруулах.
                </h3>
                <dev className="mb-9">
                  <input
                    className="rounded-xl h-[54px] w-[400px] p-3 bg-gray-100 "
                    type="text"
                    id="roll"
                    name="roll"
                    required
                    maxlength="20"
                    placeholder="6 оронтой нууц кодыг оруулна уу"
                  />
                </dev>
                <button
                  className={`${"animate-wiggle"} bg-slate-800 my-10 p-3 w-80 text-white rounded-lg hover:shadow-xl`}
                  onClick={() => {}}
                  onAnimationEnd={() => setEffect(false)}
                >
                  Давхар баталгаажуулалт тохируулах
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="justify-center bg-black/50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-in duration-300"
        >
          <div className="h-[275px] w-[313px] bg-white rounded-xl  justify-center items-center flex ">
            <div>
              <h1 className="text-base font-bold mb-6">
                Утасны камераар уншуулна уу.
              </h1>
              <QRCode
                className="m-auto"
                data="https://www.google.com"
                size={180}
              />
            </div>
          </div>
        </div>
      )}
      {showModal1 && (
        <div
          onClick={() => setShowModal1(false)}
          className="justify-center bg-black/50 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="h-[275px] w-[313px] bg-white rounded-xl  justify-center items-center flex">
            <div>
              <h1 className="text-base font-bold mb-6">
                Утасны камераар уншуулна уу.
              </h1>
              <QRCode
                className="m-auto"
                data="https://www.google.com"
                size={180}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
