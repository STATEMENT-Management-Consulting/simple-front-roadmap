import { useState } from "react";
import { Home } from "./components/home/home";
import { Layout } from "./components/layout";
import { Game } from "./components/game/game";

function App() {
  const [state, setState] = useState<"init" | undefined>(undefined);

  if (state === "init") {
    return <Game goToHome={() => setState("init")} />;
  }

  return <Home onPlay={() => setState("init")} />;
}

export default function MainApp() {
  return (
    <Layout>
      <App />
    </Layout>
  );
}
