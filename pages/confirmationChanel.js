import * as React from "react";

import ReactInputVerificationCode from "react-input-verification-code";

const Auth = () => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <div className="border-l-2 border-[#22cda8] pl-4 mb-[52px]">
            <h1 className="font-bold text-2xl mb-3">Баталгаажуулах суваг</h1>

            <p className="text-sm w-[296px]">
              Хадгалаагүй төхөөрөмжөөс нэвтэрлээ. Та дараах сонголтуудын нэгээр
              баталгаажуулна уу.
            </p>
          </div>

          <div className="text-center">
            <button
              className={` bg-[#33363b] mb-7 p-3 w-80 text-white rounded-lg hover:shadow-xl`}
            >
              Буцах
            </button>
          </div>
        </div>

        {/* <button onClick={clearValue}>Clear</button> */}
      </div>
    </>
  );
};

export default Auth;
