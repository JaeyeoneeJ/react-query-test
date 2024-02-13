import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiKey = process.env.REACT_APP_OPEN_API_KEY;
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

const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  let day = today.getDate();

  // 월과 일이 한 자리 수일 경우 앞에 0을 붙여줍니다.
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  const formattedDate = `${year}${month}${day}`;
  return formattedDate;
};

const UltraSrcNcst = () => {
  const getUltraSrtNcst = async () => {
    const res = await axios.get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst`,
      {
        params: {
          serviceKey: apiKey,
          numOfRows: "10",
          pageNo: "1",
          dataType: "JSON",
          base_date: getFormattedDate(),
          base_time: "0600",
          nx: "55",
          ny: "127",
        },
      }
    );

    return res.data?.response?.body.items.item;
  };
  console.log("jjy getUltraSrtNcst", getUltraSrtNcst());
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
