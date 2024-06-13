import React from "react";
import "./Result.css";
import { DpeGesType } from "../PredictForm/PredictForm";

interface Props extends Partial<DpeGesType> {}

const letter = [
  { label: "G", color: "#d90429" },
  { label: "F", color: "#f3722c" },
  { label: "E", color: "#f8961e" },
  { label: "D", color: "#ffd60a" },
  { label: "C", color: "#ACD793" },
  { label: "B", color: "#06D001" },
  { label: "A", color: "#059212" },
];

const Result: React.FC<Props> = (props) => {
  return (
    <div
      style={{ display: "flex", placeContent: "center", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
        }}
      >
        {letter.map((l, index) => {
          const currentResult = props.Etiquette_DPE === index;
          return (
            <div
              style={{
                height: 50,
                border: currentResult ? "2px solid silver" : "",
                boxSizing: "border-box",
                width: 70,
                borderTopLeftRadius: "1rem",
                borderBottomLeftRadius: "1rem",
                alignContent: "center",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: currentResult ? "white" : "",
              }}
            >
              {currentResult && l.label}
            </div>
          );
        })}
      </div>
      <div
        style={{
          flex: 1,
          maxWidth: 500,
          display: "flex",
          flexDirection: "column-reverse",
          gap: "1rem",
        }}
      >
        {letter.map((l, index) => (
          <ResultItem {...l} flex={(letter.length - index) / letter.length} />
        ))}
      </div>
    </div>
  );
};

export default Result;

const ResultItem: React.FC<{ flex: number; label: string; color: string }> = ({
  flex,
  label,
  color,
}) => {
  return (
    <div>
      <div style={{ display: "flex", height: 50 }}>
        <div
          style={{
            flex,
            backgroundColor: color,
            placeContent: "center",
            fontWeight: "bold",
            color: "white",
            padding: ".5rem",
          }}
        ></div>
        <div style={{ backgroundColor: color }} className=" triangle"></div>
      </div>
    </div>
  );
};
