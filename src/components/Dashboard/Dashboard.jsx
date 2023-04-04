import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
  const students = [
    { id: 1, name: "Alice", math: 80, physics: 90, chemistry: 85 },
    { id: 2, name: "Bob", math: 75, physics: 85, chemistry: 80 },
    { id: 3, name: "Charlie", math: 90, physics: 80, chemistry: 70 },
    { id: 4, name: "David", math: 70, physics: 75, chemistry: 90 },
    { id: 5, name: "Emily", math: 85, physics: 80, chemistry: 75 },
    { id: 6, name: "Frank", math: 75, physics: 90, chemistry: 80 },
    { id: 7, name: "Grace", math: 80, physics: 70, chemistry: 85 },
    { id: 8, name: "Henry", math: 90, physics: 75, chemistry: 70 },
    { id: 9, name: "Isabelle", math: 85, physics: 85, chemistry: 80 },
    { id: 10, name: "Jack", math: 70, physics: 80, chemistry: 75 },
    { id: 11, name: "Kate", math: 85, physics: 75, chemistry: 70 },
    { id: 12, name: "Liam", math: 80, physics: 85, chemistry: 75 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={students}>
        <Line dataKey="physics"></Line>
        <Line stroke="#82ca9d" dataKey="math"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Dashboard;
