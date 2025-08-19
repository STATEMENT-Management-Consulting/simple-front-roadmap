import { useState } from "react";
import { Home } from "./game/home/home";
import { Board } from "./game/board/board";
import { Layout } from "./components/layout";

type StateProps = "init" | "playing";

function App() {
  const [state, setState] = useState<StateProps>("init");

  if (state === "init") {
    return <Home onPlay={() => setState("playing")} />;
  }

  return <Board onGoToHome={() => setState("init")} />;
}

export default function MainApp() {
  return (
    <Layout>
      <App />
    </Layout>
  );
}
