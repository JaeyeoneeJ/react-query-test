import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UltraSrcNcst from "./components/UltraSrcNcst";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UltraSrcNcst />
      </div>
    </QueryClientProvider>
  );
}

export default App;
