import React from "react";
import bg from "../images/reprotbg.svg";
import PatientReportDetail from "./PatientReportDetail";

function Reports({ reports, setReports }) {
  return (
    <div className="w-[80%] relative left-[18%]">
      <div className="h-[150px]">
        <img src={bg} alt="bg" className="h-full w-full object-cover"></img>
      </div>
      <div className="text-[#2D7A9F] font-semibold font-sidenav text-xl py-4">
        All Files
      </div>
      <PatientReportDetail reports={reports} setReports={setReports} />
    </div>
  );
}

export default Reports;
