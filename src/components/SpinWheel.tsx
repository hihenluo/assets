import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "WIN" },
  { option: "LOSE" },
  { option: "WIN" },
  { option: "WIN" },
  { option: "LOSE" },
  { option: "WIN" },
];

export default function SpinWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSpinClick = () => {
    if (mustSpin) return;
    const index = Math.floor(Math.random() * data.length);
    setPrizeIndex(index);
    setMustSpin(true);
    setResult(null);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    const prize = data[prizeIndex];
    setResult(prize.option);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeIndex}
        data={data}
        onStopSpinning={handleStopSpinning}
        backgroundColors={["#a855f7", "#2563eb"]}
        textColors={["#ffffff"]}
        outerBorderColor="#000"
        outerBorderWidth={4}
        radiusLineColor="#fff"
        radiusLineWidth={2}
        fontSize={16}
      />

      <div className="bg-gray-200 rounded-lg p-4 w-full max-w-xs flex flex-col items-center gap-3">
        <button
          className={`w-full px-6 py-2 rounded-lg font-semibold transition-colors ${
            mustSpin
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          onClick={handleSpinClick}
          disabled={mustSpin}
        >
          {mustSpin ? "Spinning..." : "Spin Now"}
        </button>
      </div>

      {result && (
        <div className="mt-4 text-center">
          <h2 className="text-3xl font-bold">
            {result === "WIN" ? "🎉 YOU WIN! 🎉" : "😢 YOU LOSE 😢"}
          </h2>
        </div>
      )}
    </div>
  );
}