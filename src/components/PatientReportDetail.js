import React from "react";
import delete_ from "../images/delete.svg";
import edit from "../images/edit.svg";

function PatientReportDetail({ reports, setReports }) {
  const handleEdit = (index) => {
    // Implement edit logic here
  };

  const handleDelete = (index) => {
    const updatedReports = reports.filter((_, i) => i !== index);
    setReports(updatedReports);
    localStorage.setItem("patientDetails", JSON.stringify(updatedReports));
  };

  return (
    <>
      {Array.isArray(reports) && reports.map((report, index) => (
        <div key={index} className="flex bg-[#FFEBE8] rounded-[12px] p-5 justify-between my-1">
          <div>
            <h3>{report.name}</h3>
            <div className="text-[#718096]">Gender: {report.gender}</div>
            <div className="text-[#718096]">Email: {report.email}</div>
            <div className="text-[#718096]">Diagnosis: {report.diagnosis}</div>
          </div>
          <div className="flex text-[12px]">
            <button className="px-2 flex items-start" onClick={() => handleDelete(index)}>
              <img src={delete_} alt="delete"></img>
              <div className="text-[#E53E3E]">DELETE</div>
            </button>
            <button className="px-2 flex items-start" onClick={() => handleEdit(index)}>
              <img src={edit} alt="edit"></img>
              <div className="text-[#00C6B1]">EDIT</div>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default PatientReportDetail;
