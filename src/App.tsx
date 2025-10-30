// App.tsx
import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect } from "react";
import ConnectMenu from "./components/ConnectMenu";

function App() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-300"
    >
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow-md">
        🎯SPIN & WIN
      </h1>

      <ConnectMenu />
    </div>
  );
}

export default App;
