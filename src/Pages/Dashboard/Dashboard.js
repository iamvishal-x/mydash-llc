import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import BarChart from "../../Components/BarChart/BarChart.js";
import Navbar from "../../Components/Navbar/Navbar";

const datas = [
  [10, 30, 40, 20, 10, 30, 40, 20, 10, 30, 40, 30, 40],
  [10, 40, 30, 20, 50, 10, 10, 30, 40, 20, 10, 30, 40],
  [60, 30, 40, 20, 30, 10, 30, 40, 20, 10, 30, 30, 40],
];
var i = 0;

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, []);

  const changeData = () => {
    setData(datas[i++]);
    if (i === datas.length) i = 0;
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <button onClick={changeData}>Change Data</button>
        <BarChart width={600} height={400} data={data} />
      </div>
    </>
  );
};

export default Dashboard;
