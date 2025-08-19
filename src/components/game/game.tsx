import { useState } from "react";
import { CogIcon } from "../../assets/icons/cog-icon";
import { PlayIcon } from "../../assets/icons/play-icon";
import { Board } from "./board";
import { UserIcon } from "../../assets/icons/user-icon";
import { RobotIcon } from "../../assets/icons/robot-icon";

interface HomeProps {
  goToHome: () => void;
}

type Step = "play-with" | "goes-with" | "playing";

const boardsSvgs = ["board_3x3.svg", "board_4x4.svg", "board_5x5.svg"];

const limit = 3;

export function Game({ goToHome }: HomeProps) {
  const [step, setStep] = useState<Step>("play-with");

  const [level, setLevel] = useState<number>(1);

  const nextLevel = () => {
    setLevel((prev) => prev + 1);
  };

  const previousLevel = () => {
    setLevel((prev) => Math.max(prev - 1, 1));
  };

  const handleBack = () => {
    switch (step) {
      case "play-with":
        goToHome();
        break;
      case "goes-with":
        setStep("play-with");
        break;
      default:
        setStep("goes-with");
        break;
    }
  };

  return (
    <div className="w-full max-w-[343px] flex flex-col p-4">
      <div className="w-full flex justify-between items-center">
        <button type="button" onClick={handleBack} className="small">
          <PlayIcon className="rotate-180" />
        </button>
        <button type="button" className="small">
          <CogIcon />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {/* Play WIth */}
        {step === "play-with" && (
          <div>
            <div className="flex flex-col items-center gap-4 mb-16">
              <h1 className="text-4xl font-semibold text-yellow-500">
                SELECT LEVEL
              </h1>
              <div className="flex items-center justify-center gap-x-3 relative">
                {level > 1 && (
                  <PlayIcon
                    onClick={previousLevel}
                    className="z-10 absolute left-[-2rem] primary rotate-180"
                  />
                )}
                <img
                  src={`/assets/${boardsSvgs[level - 1]}`}
                  alt="Board"
                  className="w-60 h-60"
                />
                {level < limit && (
                  <PlayIcon
                    onClick={nextLevel}
                    className="z-10 absolute -right-8 primary"
                  />
                )}
              </div>

              <div className="flex items-center justify-center gap-x-1">
                {Array.from({ length: limit }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 border-none rounded-full ${
                      level === index + 1 ? "bg-yellow-500" : "bg-[#D9D9D9]"
                    }`}
                    onClick={() => setLevel(index + 1)}
                  />
                ))}
              </div>
            </div>

            <div className="gap-y-6 flex flex-col">
              <button
                type="button"
                onClick={() => setStep("goes-with")}
                className="primary"
              >
                <UserIcon />
                <span>vs</span>
                <RobotIcon />
              </button>
              <button
                type="button"
                className="primary"
                onClick={() => setStep("goes-with")}
              >
                <UserIcon />
                <span>vs</span>
                <UserIcon />
              </button>
            </div>
          </div>
        )}

        {/* Goes  WIth */}
        {step === "goes-with" && <div>Goes With</div>}

        {step === "playing" && <Board />}
      </div>
    </div>
  );
}
