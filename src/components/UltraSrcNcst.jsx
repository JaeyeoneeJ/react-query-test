import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUltraSrtNcst } from "../api/api";
import { category, getCategoryValue } from "../utils/constants";

const UltraSrcNcst = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["ultraSrcNcst"],
    queryFn: getUltraSrtNcst,
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
              {getCategoryValue(item.category, item.obsrValue)}
            </div>
          ))}
        </>
      ) : (
        "NO DATA"
      )}
    </div>
  );
};

export default UltraSrcNcst;
