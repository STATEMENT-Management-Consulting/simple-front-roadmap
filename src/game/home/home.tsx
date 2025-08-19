import { CogIcon } from "../../assets/icons/cog-icon";
import { PlayIcon } from "../../assets/icons/play-icon";

interface HomeProps {
  onPlay: () => void;
}

export function Home({ onPlay }: HomeProps) {
  return (
    <div className="">
      <img
        src="/assets/logo.svg"
        alt="Tik Tack Toe"
        className="mx-auto mb-24"
      />

      <div className="gap-y-6 flex flex-col">
        <button type="button" onClick={onPlay} className="primary">
          <span>Play</span>
          <PlayIcon />
        </button>
        <button type="button" onClick={onPlay} className="primary">
          <span>Settings </span>
          <CogIcon />
        </button>
      </div>
    </div>
  );
}
