import React from "react";
import { useQueries } from "@tanstack/react-query";
import { getUltraSrtFcst, getUltraSrtNcst, getVilageFcst } from "../api/api";

const All = () => {
  const results = useQueries({
    queries: [
      { queryKey: ["ultraSrcFcst"], queryFn: getUltraSrtFcst },
      { queryKey: ["ultraSrcNcst"], queryFn: getUltraSrtNcst },
      { queryKey: ["VilageFcst"], queryFn: getVilageFcst },
    ],
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  if (results.pending) {
    return <div>Not yet...</div>;
  } else {
    return <div>All Data</div>;
  }
};

export default All;
