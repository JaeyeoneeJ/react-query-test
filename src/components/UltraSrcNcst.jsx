import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUltraSrtNcst } from "../api/api";

const category = {
  T1H: {
    title: "기온",
    unit: "℃",
  },
  RN1: {
    title: "1시간 강수량",
    unit: "mm",
  },
  UUU: {
    title: "동서바람성분",
    unit: "m/s",
  },
  VVV: {
    title: "남북바람성분",
    unit: "m/s",
  },
  REH: {
    title: "습도",
    unit: "%",
  },
  PTY: {
    title: "강수형태",
    unit: "",
  },
  VEC: {
    title: "풍향",
    unit: "deg",
  },
  WSD: {
    title: "풍속",
    unit: "m/s",
  },
};

const UltraSrcNcst = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["ultraSrcNcst"],
    queryFn: getUltraSrtNcst,
  });

  if (isPending) return "Loading...";
  if (error) return "error: " + error.message;
  return (
    <div>
      <h3>today: {data[0].baseDate}</h3>
      {data.map((item, index) => (
        <div key={index}>
          - {category[item.category].title}:{" "}
          {item.obsrValue + " " + category[item.category].unit}
        </div>
      ))}
    </div>
  );
};

export default UltraSrcNcst;
