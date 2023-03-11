/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import TrollFace from "../images/troll-face.png";

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;

        padding: 32px;
        background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
      `}
    >
      <img
        css={css`
          width: 50px;
        `}
        src={TrollFace}
        alt=""
      />
      <h2
        css={css`
          color: white;
          margin-inline-start: 1rem;
        `}
      >
        Meme Generator
      </h2>
    </header>
  );
};
export default Header;
