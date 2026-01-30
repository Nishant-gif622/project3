import React from "react";
import "./App.css";

const timetable = {
  Monday: [
    "25EC2101E-L\nRoom L303",
    "25EC2101E-L\nRoom L303",
    "25SC1204E-S\nRoom L303",
    "25SC1204E-S\nRoom L303",
    "25CS1201E-S\nRoom L303",
    "25CS1201E-S\nRoom L303",
  ],
  Tuesday: [
    "25MT1205E-L\nRoom L303",
    "25MT1205E-L\nRoom L303",
    "25SC1204E-S\nRoom L303",
    "25SC1204E-S\nRoom L303",
    "25CS1201E-S\nRoom L303",
    "25CS1201E-S\nRoom L303",
  ],
  Wednesday: [
    "25SC1204E-L\nRoom L303",
    "25SC1204E-L\nRoom L303",
    "25EC2101E-S\nRoom L303",
    "25EC2101E-S\nRoom L303",
    "25UC1204E-P\nRoom L303",
    "25UC1204E-P\nRoom L303",
  ],
  Thursday: [
    "25SC1204E-P\nRoom L303",
    "25SC1204E-P\nRoom L303",
    "25EC2101E-S\nRoom L303",
    "25EC2101E-S\nRoom L303",
    "25UC1204E-P\nRoom L303",
    "25UC1204E-P\nRoom L303",
  ],
  Friday: [
    "25MT1205E-P\nRoom L303",
    "25MT1205E-P\nRoom L303",
    "25CS1201E-P\nRoom L303",
    "25CS1201E-P\nRoom L303",
    "25SC1204E-S\nRoom L303",
    "25SC1204E-S\nRoom L303",
  ],
  Saturday: [
    "25MT1205E-P\nRoom L303",
    "25MT1205E-P\nRoom L303",
    "25CS1201E-P\nRoom L303",
    "25CS1201E-P\nRoom L303",
    "25SC1204E-S\nRoom L303",
    "25SC1204E-S\nRoom L303",
  ],
};

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Time Table S-2 (PBL)</h1>

      <div className="table">
        <div className="header">Day</div>
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <div key={p} className="header">{p}</div>
        ))}

        {Object.entries(timetable).map(([day, periods]) => (
          <React.Fragment key={day}>
            <div className="day">{day}</div>
            {periods.map((item, index) => (
              <div key={index} className="cell">
                {item.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}