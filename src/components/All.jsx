import React from "react";
import { useQueries } from "@tanstack/react-query";
import { getUltraSrtFcst, getUltraSrtNcst, getVilageFcst } from "../api/api";

const All = () => {
  const queries = [
    { queryKey: ["ultraSrcNcst"], queryFn: getUltraSrtNcst },
    { queryKey: ["ultraSrcFcst"], queryFn: getUltraSrtFcst },
    { queryKey: ["VilageFcst"], queryFn: getVilageFcst },
  ];
  const results = useQueries({
    queries,
    combine: (queryResults) => {
      const combinedData = {};
      queryResults.forEach((result, index) => {
        const queryKey = queries[index].queryKey.join("_");
        combinedData[queryKey] = result.data;
      });
      return {
        data: combinedData,
        pending: queryResults.some((result) => result.isPending),
      };
    },
  });

  console.log("results: ", results);

  if (results.pending) {
    return <div>Not yet...</div>;
  } else {
    return <div>All Data</div>;
  }
};

export default All;
