import React from "react";
import { Bar, Pie } from "react-chartjs-2";

const Charts = ({ data, country }) => {
  const { confirmed, recovered, deaths } = data.globalData.read();

  const pieChart = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        data: [confirmed.value, recovered.value, deaths.value],
        backgroundColor: ["#ef9d1a", "#3da063", "#f86161"],
        hoverBackgroundColor: ["#c47807", "#3c6d36", "#ed3131"],
      },
    ],
  };

  const barChart = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "People",
        data: [confirmed.value, recovered.value, deaths.value],
        backgroundColor: ["#ef9d1a", "#3da063", "#f86161"],
        hoverBackgroundColor: ["#c47807", "#3c6d36", "#ed3131"],
      },
    ],
  };

  return (
    <div
      className="chartContainer"
      id="Charts"
      style={{ width: "80%", margin: "0 auto" }}
    >
      <Pie data={pieChart} width={640} height={280} />
      <br />
      {country ? (
        <Bar
          data={barChart}
          width={100}
          height={45}
          options={{
            legend: { display: false },

            title: { display: true, text: `Covid-19 Stats in  ${country}` },
          }}
        />
      ) : (
        <Bar
          data={barChart}
          width={100}
          height={45}
          options={{
            legend: { display: false },

            title: { display: true, text: `Covid-19 Global Stats` },
          }}
        />
      )}
    </div>
  );
};

export default Charts;