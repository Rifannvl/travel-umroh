import React, { useState } from "react";
import { Carousel, Radio } from "antd";

const contentStyle = {
  height: "160px", // Keep the same height
  color: "#fff",
  lineHeight: "160px", // Keep the text centered vertically
  textAlign: "center", // Keep text centered horizontally
  background: "#364d79", // Keep background color if needed
};

const App = () => {
  const [dotPosition, setDotPosition] = useState("top");

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <img
            src="https://via.placeholder.com/600x160/364d79/ffffff?text=Image+1"
            alt="Image 1"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x160/364d79/ffffff?text=Image+2"
            alt="Image 2"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x160/364d79/ffffff?text=Image+3"
            alt="Image 3"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x160/364d79/ffffff?text=Image+4"
            alt="Image 4"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </>
  );
};

export default App;
