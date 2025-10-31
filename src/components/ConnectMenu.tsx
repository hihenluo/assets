import { useAccount } from "wagmi";
import SpinWheel from "./SpinWheel";

export default function ConnectMenu() {
  const { isConnected, address } = useAccount();

  if (isConnected && address) {
    return (
      <div className="relative w-full max-w-md flex flex-col items-center gap-4">
        <div className="flex justify-end items-center w-full px-2">
          <appkit-button />
        </div>

        <SpinWheel />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <appkit-button />
    </div>
  );
}