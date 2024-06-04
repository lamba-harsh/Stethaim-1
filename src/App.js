import logo from "./images/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useState,useEffect } from "react";
import Reports from "./components/Reports";
import NewPatient from "./components/NewPatient";
import EditReport from "./components/EditReport";

function App() {
  const [reports, setReports] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [newPatient, setNewPatient] = useState(false);
  const [editReport, setEditReport] = useState(false);
  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem("patientDetails")) || [];
    setReports(storedReports);
  }, []);

  const updateReports = (newReports) => {
    setReports(newReports);
  };
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar
          setReports={setReports}
          reports={reports}
          setDashboard={setDashboard}
          dashboard={dashboard}
          setNewPatient={setNewPatient}
          newPatient={newPatient}
          editReport={editReport}
          setEditReport={setEditReport}
        />
        {reports ? (
          <Reports
            reports={reports}
            setReports={setReports}
            editReport={editReport}
            setEditReport={setEditReport}
          />
        ) : (
          <></>
        )}
        {editReport ? <EditReport /> : <></>}
        {newPatient ? <NewPatient updateReports={updateReports} /> : <></>}
        {dashboard ? <Dashboard /> : <></>}
      </div>
    </>
  );
}

export default App;