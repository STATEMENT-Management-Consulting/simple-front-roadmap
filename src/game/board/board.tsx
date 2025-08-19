interface BoardProps {
  onGoToHome: () => void;
}

export function Board({ onGoToHome }: BoardProps) {
  return (
    <div>
      Board <button onClick={onGoToHome}>Go Home</button>
    </div>
  );
}
