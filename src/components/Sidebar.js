import React from "react";
import sidelogo from "../images/Sidelogo.svg";
import dashb from "../images/Dashboard.svg";
import patient from "../images/newPatient.svg";
import report from "../images/reports.svg";
import setting from "../images/Setting.svg";
import logoout from "../images/logout.svg";

function Sidebar({
  setReports,
  reports,
  setDashboard,
  dashboard,
  setNewPatient,
  newPatient,
  setEditReport,
}) {
  const handleReports = () => {
    setReports(true);
    setDashboard(false);
    setNewPatient(false);
    setEditReport(false);
  };
  const handleDashbord = () => {
    setDashboard(!dashboard);
    setReports(false);
    setNewPatient(false);
    setEditReport(false);
  };
  const handlePatient = () => {
    setNewPatient(true);
    setDashboard(false);
    setReports(false);
    setEditReport(false);
  };
  return (
    <div className="pr-4 w-[18%] fixed">
      <div className=" px-4 flex items-center py-7">
        <img src={sidelogo} alt="sideLogo"></img>
        <div className="text-[#00C6B1] px-4 font-navtxt">Hello Dr.</div>
      </div>
      <div className="text-[#082431] font-light px-4">MENU</div>
      <div
        onClick={handleDashbord}
        className={`flex px-3 my-2 py-3 rounded-lg hover:bg-[#7EFBFC] hover:bg-opacity-[0.3] cursor-pointer ${
          dashboard
            ? `bg-opacity-[0.3] bg-[#7EFBFC]`
            : `hover:bg-[#7EFBFC] hover:bg-opacity-[0.3] `
        }`}
      >
        <img src={dashb} alt="dashboard"></img>
        <div className="text-[#2198C2] font-sidenav px-2">Dashboard</div>
      </div>
      <div
        onClick={handleReports}
        className={`flex my-2 py-3 px-3 rounded-lg cursor-pointer ${
          reports
            ? `bg-opacity-[0.3] bg-[#7EFBFC]`
            : `hover:bg-[#7EFBFC] hover:bg-opacity-[0.3] `
        }`}
      >
        <img src={report} alt="dashboard" className="w-[14%]"></img>
        <div className={`text-[#2198C2] font-sidenav px-2`}>Reports</div>
      </div>
      <div
        onClick={handlePatient}
        className={`flex rounded-lg py-3 hover:bg-[#7EFBFC] hover:bg-opacity-[0.3] px-3 cursor-pointer  ${
          newPatient
            ? `bg-opacity-[0.3] bg-[#7EFBFC]`
            : `hover:bg-[#7EFBFC] hover:bg-opacity-[0.3] `
        }`}
      >
        <img src={patient} alt="dashboard"></img>
        <div className="text-[#2198C2] font-sidenav px-2">New Patient</div>
      </div>
      <div className="text-[#082431] font-light px-3 pt-3 py-2">OTHERS</div>
      <div className="flex py-3 hover:bg-[#7EFBFC] hover:bg-opacity-[0.3] px-3 cursor-pointer">
        <img src={setting} alt="dashboard"></img>
        <div className="text-[#2198C2] font-sidenav px-2 rounded-lg">
          Settings
        </div>
      </div>
      <div className="flex py-1 hover:bg-[#7EFBFC] hover:bg-opacity-[0.3] px-3 cursor-pointer">
        <img src={logoout} alt="dashboard" className="w-[16%]"></img>
        <div className="text-[#2198C2] font-sidenav px-2 my-2 rounded-lg">
          Log Out
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
