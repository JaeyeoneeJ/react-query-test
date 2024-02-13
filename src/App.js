import React, { useCallback, useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { tabButtons } from "./utils/constants";
import UltraSrcNcst from "./components/UltraSrcNcst";
import UltraSrcFcst from "./components/UltraSrtFcst";
import VilageFcst from "./components/VilageFcst";
import All from "./components/All";

function App() {
  const queryClient = new QueryClient();
  const [selectedTabIndex, setSelectedTabIndex] = useState("getUltraSrtNcst");

  const renderComponent = useCallback(() => {
    switch (selectedTabIndex) {
      case "getUltraSrtNcst":
        return <UltraSrcNcst />;
      case "getUltraSrtFcst":
        return <UltraSrcFcst />;
      case "getVilageFcst":
        return <VilageFcst />;
      case "getAll":
        return <All />;
      default:
        return <div>ERROR</div>;
    }
  }, [selectedTabIndex]);

  return (
    <QueryClientProvider client={queryClient}>
      <h1 className={"title"}>기상청 OPEN API</h1>
      <div>
        {Object.keys(tabButtons).map((tabName, index) => (
          <button
            key={index}
            className={"tabButton"}
            onClick={() => setSelectedTabIndex(tabName)}
          >
            {tabButtons[tabName]}
          </button>
        ))}
      </div>
      {renderComponent()}
    </QueryClientProvider>
  );
}

export default App;
