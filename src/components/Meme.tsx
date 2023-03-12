/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { ChangeEvent, useEffect, useState } from "react";

import { getMemesData } from "../hooks/getMemesData";
import { MemeType } from "../utils/types";

const Meme = () => {
  const [allMemes, setAllMemes] = useState<MemeType[]>([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // Fetch allMemes data
  useEffect(() => {
    const url = "https://api.imgflip.com/get_memes";

    async function fetchMemesData() {
      const memesData = await getMemesData(url);
      setAllMemes(memesData.data.memes);
    }

    fetchMemesData();
  }, []);

  // Handle text input value change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
        topText: "",
        bottomText: "",
      };
    });
  };

  return (
    <main
      css={css`
        margin: 0 auto;
        max-width: 40rem;
        padding: 4rem 1rem;
      `}
    >
      {/* Form */}
      <div
        css={css`
          display: grid;
          gap: 1rem;
          grid-template: 40px 40px / 1fr 1fr;
        `}
      >
        <input
          css={css`
            border: 1px solid #d5d4d8;
            text-indent: 5px;
            border-radius: 5px;
            width: 100%;
          `}
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          css={css`
            border: 1px solid #d5d4d8;
            text-indent: 5px;
            border-radius: 5px;
            width: 100%;
          `}
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button
          css={css`
            grid-column: 1 / -1;
            background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
            color: white;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
            font-family: "Lato", sans-serif;
            font-weight: bold;
          `}
          onClick={getMemeImage}
        >
          Get a new meme image 🖼️
        </button>
      </div>
      {/* Meme */}
      <div
        css={{
          position: "relative",
          marginBlockStart: "1rem",
          overflow: "hidden",
        }}
      >
        {/* Top Text */}
        <h2
          css={css`
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            text-align: center;
            padding: 0 5px;
            margin: 1rem 0;
            text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
              -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000,
              -2px 0 0 #000, 2px 2px 5px #000;
            font-family: impact, sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: white;
            width: 100%;
            font-size: 1rem;
            @media screen and (min-width: 25rem) {
              font-size: 2em;
            }
          `}
        >
          {meme.topText}
        </h2>
        {/* Image */}
        <img
          css={{ width: "100%", borderRadius: "5px" }}
          src={meme.randomImage}
          alt=""
        />
        {/* Bottom Text */}
        <h2
          css={css`
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            text-align: center;
            padding: 0 5px;
            margin: 1rem 0;
            text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
              -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000,
              -2px 0 0 #000, 2px 2px 5px #000;
            font-family: impact, sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: white;
            width: 100%;
            font-size: 1rem;
            @media screen and (min-width: 25rem) {
              font-size: 2em;
            }
          `}
        >
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};
export default Meme;
