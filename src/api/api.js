import { getCurrentTime, getFormattedDate } from "../utils/utils";
import { weatherInstance } from "./instance";

const apiKey = process.env.REACT_APP_OPEN_API_KEY;

export const getUltraSrtNcst = async () => {
  const res = await weatherInstance.get(`/getUltraSrtNcst`, {
    params: {
      serviceKey: apiKey,
      numOfRows: "10",
      pageNo: "1",
      dataType: "JSON",
      base_date: getFormattedDate(),
      base_time: getCurrentTime(),
      nx: "55",
      ny: "127",
    },
  });
  console.log("jjy res", res.data?.response?.body?.items?.item);
  if (res.data?.response?.header?.resultCode === "00") {
    return res.data?.response?.body?.items?.item;
  } else {
    return [];
  }
};

export const getUltraSrtFcst = async () => {
  const res = await weatherInstance.get(`/getUltraSrtFcst`, {
    params: {
      serviceKey: apiKey,
      numOfRows: "60",
      pageNo: "1",
      dataType: "JSON",
      base_date: getFormattedDate(),
      base_time: "0600",
      nx: "55",
      ny: "127",
    },
  });

  const sortRes = res.data?.response?.body?.items?.item?.sort(
    (a, b) => Number(a.fcstTime) - Number(b.fcstTime)
  );
  console.log("jjy res", res.data?.response?.body?.items?.item);
  console.log("jjy sortRes", sortRes);

  if (res.data?.response?.header?.resultCode === "00") {
    return res.data?.response?.body?.items?.item;
  } else {
    return [];
  }
};

export const getVilageFcst = async () => {
  const res = await weatherInstance.get(`/getVilageFcst`, {
    params: {
      serviceKey: apiKey,
      numOfRows: "60",
      pageNo: "1",
      dataType: "JSON",
      base_date: getFormattedDate(),
      base_time: "0200",
      nx: "55",
      ny: "127",
    },
  });

  const sortRes = res.data?.response?.body?.items?.item?.sort(
    (a, b) => Number(a.fcstTime) - Number(b.fcstTime)
  );
  console.log("jjy res", res.data?.response?.body?.items?.item);
  console.log("jjy sortRes", sortRes);

  if (res.data?.response?.header?.resultCode === "00") {
    return res.data?.response?.body?.items?.item;
  } else {
    return [];
  }
};
