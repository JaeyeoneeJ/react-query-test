import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getVilageFcst } from "../api/api";
import { category, getCategoryValue } from "../utils/constants";

const VilageFcst = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["VilageFcst"],
    queryFn: getVilageFcst,
  });

  if (isPending) return "Loading...";
  if (error) return "error: " + error.message;
  return (
    <div>
      {data?.[0]?.baseDate ? (
        <>
          <h3>today: {data?.[0]?.baseDate}</h3>
          {data.map((item, index) => (
            <div key={index}>
              - {category[item.category].title}:{" "}
              {getCategoryValue(item.category, item.fcstValue)}
            </div>
          ))}
        </>
      ) : (
        "NO DATA"
      )}
    </div>
  );
};

export default VilageFcst;
