import React, { useState } from "react";

const SliderComponent = () => {
  const [value, setValue] = useState("male"); // Initialize the slider value with 50

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        min="Male"
        max="Female"
        value={value}
        onChange={handleChange}
      />
      <span className="slider-value">{value}</span>
    </div>
  );
};

export default SliderComponent;
