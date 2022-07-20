import * as React from "react";

import ReactInputVerificationCode from "react-input-verification-code";

const Auth = () => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <div className="border-l-2 border-[#22cda8] pl-4 mb-[52px]">
            <h1 className="font-bold text-2xl mb-3">
              Давхар баталгаажуулах код
            </h1>

            <p className="text-sm w-[296px]">
              Authenticator аппликейшнд үүсгэсэн 6 оронтой кодыг оруулна уу.
            </p>
          </div>
          <div className="mb-[103px]">
            <ReactInputVerificationCode
              length={6}
              onChange={setValue}
              value={value}
            />
          </div>

          <div className="text-center">
            <button
              className={` bg-[#33363b] mb-7 p-3 w-80 text-white rounded-lg hover:shadow-xl`}
            >
              Баталгаажуулах
            </button>

            <p className="text-[#22cda8]">Өөр аргаар баталгаажуулах</p>
          </div>
        </div>

        {/* <button onClick={clearValue}>Clear</button> */}
      </div>
    </>
  );
};

export default Auth;
