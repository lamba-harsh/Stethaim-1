import React from "react";
import bg from "../images/reprotbg.svg";

function EditReport() {
  return (
    <>
      <div className="w-[80%] relative left-[18%]">
        <div className="h-[150px]">
          <img src={bg} alt="bg" className="h-full w-full object-cover"></img>
        </div>
        <div>
          <form className="bg-[#F6F6F6]">
            <div className="text-xl flex px-10 py-5 pt-6 w-full">
              <div className="flex flex-col px-10 w-[50%]">
                <label className="py-3 text-[#718096]">Patient Name:</label>
                <input
                  type="text"
                  placeholder="Alex James"
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
              <div className="w-[50%]">
                <div className="py-3 text-[#718096]">Patient Id:</div>
                <input
                  type="text"
                  placeholder="AB123HQ"
                  readOnly
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
            </div>

            <div className="text-xl flex px-10 py-5 pt-6 w-full">
              <div className="flex flex-col px-10 w-[50%]">
                <label className="py-3 text-[#718096]">Email Address:</label>
                <input
                  type="email"
                  placeholder="alex@gmail.com"
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
              <div className="w-[50%]">
                <div className="py-3 text-[#718096]">Age:</div>
                <input
                  type="number"
                  placeholder="45"
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
            </div>

            <div className="text-xl flex px-10 py-1 pt-6 w-full">
              <div className="flex flex-col px-10 w-[50%]">
                <label className="py-3 text-[#718096]">Sound File:</label>
                <input
                  type="file"
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
              <div className="w-[50%]">
                <div className="py-3 text-[#718096]">Sound Type:</div>
                <select className="text-left rounded-2xl p-2 px-6 text-xl">
                  <option value={"Select Sound Type"}>Select Sound Type</option>
                  <option value={"Normal"}>Normal</option>
                  <option value={"AbNormal"}>Abnormal</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="uppercase text-xl relative left-[40%] px-10 py-3 my-6 text-[#2D7A9F] rounded-xl bg-[#00C6B1]"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditReport;
