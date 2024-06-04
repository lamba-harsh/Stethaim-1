import React, { useState } from "react";
import bg from "../images/reprotbg.svg";

function NewPatient({ updateReports }) {
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    soundFile: null,
    soundType: "",
    adventitiousSounds: "",
    pathologies: "",
    diagnosis: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let existingPatients = JSON.parse(localStorage.getItem("patientDetails"));
      if (!Array.isArray(existingPatients)) {
        existingPatients = []; // Initialize as empty array if not found or invalid
      }
      existingPatients.push(patientDetails);
      localStorage.setItem("patientDetails", JSON.stringify(existingPatients));
      console.log("Patient details saved successfully!", patientDetails);
      alert("Patient details saved successfully!");
      updateReports(existingPatients); // Update the reports
    } catch (error) {
      console.error("Error saving patient details:", error);
      alert("Failed to save patient details. Please try again.");
    }
  };
  return (
    <>
      <div className="w-[80%] relative left-[18%]">
        <div className="h-[150px]">
          <img src={bg} alt="bg" className="h-full w-full object-cover"></img>
        </div>
        <div>
          <form className="bg-[#F6F6F6]" onSubmit={handleSubmit}>
            <div className="text-xl flex px-10 py-1 pt-6 w-full">
              <div className="flex flex-col px-10 w-[50%]">
                <label className="py-3 text-[#718096]">Patient Name:</label>
                <input
                  type="text"
                  name="name"
                  value={patientDetails.name}
                  onChange={handleChange}
                  placeholder="Alex James"
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
              <div className="w-[50%]">
                <div className="py-3 text-[#718096]">Patient Gender:</div>
                <input
                  type="text"
                  name="gender"
                  value={patientDetails.gender}
                  onChange={handleChange}
                  placeholder="Male/Female"
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
            </div>

            <div className="text-xl flex px-10 py-1 pt-6 w-full">
              <div className="flex flex-col px-10 w-[50%]">
                <label className="py-3 text-[#718096]">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={patientDetails.email}
                  onChange={handleChange}
                  placeholder="alex@gmail.com"
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
              <div className="w-[50%]">
                <div className="py-3 text-[#718096]">Mobile Number:</div>
                <input
                  type="number"
                  name="mobile"
                  value={patientDetails.mobile}
                  onChange={handleChange}
                  placeholder="+91"
                  className="text-left rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
            </div>

            <div className="text-xl flex px-10 py-1 pt-6 w-full">
              <div className="flex flex-col px-10 w-full">
                <label className="py-3 text-[#718096]">Patient Address:</label>
                <textarea
                  name="address"
                  value={patientDetails.address}
                  onChange={handleChange}
                  rows={"3"}
                  className="rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
            </div>

            <div className="text-xl flex px-10 py-1 pt-6 w-full">
              <div className="flex flex-col px-10 w-[50%]">
                <label className="py-3 text-[#718096]">
                  Upload Sound File Recorded:
                </label>
                <input
                  type="file"
                  name="soundFile"
                  onChange={handleChange}
                  className="text-center rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
              <div className="w-[50%]">
                <div className="py-3 text-[#718096]">Sound Type:</div>
                <select
                  name="soundType"
                  value={patientDetails.soundType}
                  onChange={handleChange}
                  className="text-left rounded-2xl p-2 px-6 text-xl"
                >
                  <option value={"Select Sound Type"}>Select Sound Type</option>
                  <option value={"Normal"}>Normal</option>
                  <option value={"AbNormal"}>Abnormal</option>
                </select>
              </div>
            </div>

            <div className="text-xl flex px-10 py-1 pt-6 w-full">
              <div className="flex flex-col px-10 w-[50%]">
                <label className="py-3 text-[#718096]">
                  Types of Adventitious sounds marked:
                </label>
                <input
                  type="text"
                  name="adventitiousSounds"
                  value={patientDetails.adventitiousSounds}
                  onChange={handleChange}
                  placeholder="Choose From Type"
                  className="text-left rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
              <div className="w-[50%]">
                <div className="py-3 text-[#718096]">
                  Previous Pathologies or Evidences:
                </div>
                <input
                  type="text"
                  name="pathologies"
                  value={patientDetails.pathologies}
                  onChange={handleChange}
                  placeholder="previous pathologies"
                  className="text-left rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
            </div>

            <div className="text-xl flex px-10 py-1 pt-6 w-full">
              <div className="flex flex-col px-10 w-full">
                <label className="py-3 text-[#718096]">
                  Diagnosis / Abnormalities Marked
                </label>
                <textarea
                  name="diagnosis"
                  value={patientDetails.diagnosis}
                  onChange={handleChange}
                  rows={"3"}
                  className="rounded-2xl p-2 bg-[#FFFFFF] text-xl placeholder-black placeholder-opacity-60"
                />
              </div>
            </div>

            <button
              type="submit"
              className="uppercase text-xl relative left-[40%] px-10 py-3 my-6 text-[#2D7A9F] rounded-xl bg-[#00C6B1]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPatient;
