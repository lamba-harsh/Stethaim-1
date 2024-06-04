import React from "react";
import delete_ from "../images/delete.svg";
import edit from "../images/edit.svg";

function Dashboard() {
  return (
    <div className="py-7 w-[50%] relative left-[18%]">
      <div className="text-[#2D7A9F] text-xl font-sidenav font-extralight py-3 mb-4">
        Latest Uploads
      </div>
      <div className="flex bg-[#FFEBE8] rounded-[12px] p-5 justify-between">
        <div>
          <h3>Oliver Liam</h3>
          <div className="text-[#718096]">Patient ID: 1SDFXX91</div>
          <div className="text-[#718096]">Email: oliver@burrito.com</div>
          <div className="text-[#718096]">
            Diagnosis: COPD, LRTI , Bronchitis
          </div>
        </div>
        <div className="flex text-[12px]">
          <button className="px-2 flex items-start">
            <img src={delete_} alt=""></img>
            <div className="text-[#E53E3E]">DELETE</div>
          </button>
          <button className="px-2 flex items-start">
            <img src={edit} alt=""></img>
            <div className="text-[#00C6B1]">EDIT</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
