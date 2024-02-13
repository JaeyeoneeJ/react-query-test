import { getFormattedDate } from "../utils/utils";
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
      base_time: "0600",
      nx: "55",
      ny: "127",
    },
  });

  return res.data?.response?.body.items.item;
};
