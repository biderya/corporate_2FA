import Image from "next/image";
import QRCode from "react-google-qrcode";

export default function Home() {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-12 bg-slate-300 h-screen right-0">
        <div className="col-span-3"></div>
        <div className="col-span-9 bg-white py-3 px-5 rounded-md mr-5 mt-20 mb-10">
          <h1 className="font-semibold text-xl mb-3">
            Two-Factor Authentication
          </h1>
          <div className="pl-2">
            <p className="leading-normal">
              Давхар баталгаажуулалт нь хадгалаагүй төхөөрөмжөөс нэвтрэх
              тохиолдолд болон <br /> өндөр дүнтэй гүйлгээ хийхэд ашиглагдана.
            </p>
            <div className="grid grid-rows-12 gap-5">
              <div className="row-span-4 py-10">
                <h3 className="font-bold my-4 text-sm">Алхам 1:</h3>
                <div className="grid grid-cols-2 w-1/2 font-medium ">
                  <label className="bg-slate-200 p-3 rounded-lg mx-5 flex items-center">
                    <Image
                      src={"/images/auto_logo.png"}
                      alt="LOGOGOGOGOGOGO"
                      height={"30px"}
                      width={"30px"}
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                    />
                    <p className="">IOS хувилбар</p>
                  </label>
                  <label className="bg-slate-200 p-3 rounded-lg mx-5 flex items-center">
                    <Image
                      src={"/images/auto_logo.png"}
                      alt="LOGOGOGOGOGOGO"
                      height={"30px"}
                      width={"30px"}
                      data-aos-duration="1000"
                      data-aos="zoom-in"
                    />

                    <p>Android хувилбар</p>
                  </label>
                </div>
              </div>
              <div className="row-span-4 ">
                <h3 className="font-bold my-4 text-sm">Алхам 2:</h3>
                <div className="flex items-center">
                  <QRCode data="https://www.google.com" size={150} />
                  <h1 className="uppercase text-3xl font-semibold text-center w-96">
                    7xuyfdhkf fghf fgjhfghfg fghgfh
                  </h1>
                  <button className="font-semibold text-gray-400">
                    Хуулах
                  </button>
                </div>
              </div>
              <div className="row-span-4 grid grid-cols-1 ">
                <h3 className="font-bold my-4 text-sm">Алхам 3:</h3>
                <dev className="mx-2">
                  <input
                    className="rounded-xl h-14 w-96 p-3 bg-gray-100 "
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
    </div>
  );
}
