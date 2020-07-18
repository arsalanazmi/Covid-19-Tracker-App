import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

const Charts = ({ data, country }) => {
  const dailyData = data.dailyData.read();
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

  const lineChart = {
    labels: dailyData.map(({ date }) => date),
    datasets: [
      {
        data: dailyData.map(({ confirmed }) => confirmed),
        label: "Infected",
        fill: true,
        backgroundColor: "#fcf4de",
        borderColor: "#ef9d1a",
      },
      {
        data: dailyData.map(({ deaths }) => deaths),
        label: "Deaths",
        fill: true,
        backgroundColor: "#fcd4c9",
        borderColor: "red",
      },
    ],
  };

  const barChart = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "People",
        backgroundColor: ["#ef9d1a", "#3da063", "#f86161"],
        data: [confirmed.value, recovered.value, deaths.value],
      },
    ],
  };

  return (
    <div className="chartContainer" style={{ width: "80%", margin: "0 auto" }}>
      <Pie data={pieChart} width={650} height={250} />
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
        <Line data={lineChart} />
      )}
    </div>
  );
};

export default Charts;
