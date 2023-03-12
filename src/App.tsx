import { css, Global } from "@emotion/react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
          }
        `}
      />
      <Header />
      <Meme />
    </>
  );
}

export default App;
