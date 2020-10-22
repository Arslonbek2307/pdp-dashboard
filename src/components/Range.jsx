import React, { useEffect, useRef, useState } from "react";
import "../styles/range.scss";
import { Icon } from "./common/Icon";
import { colors } from "../utility/colors";

const BAD_ICON = "bad",
  NORMAL_ICON = "normal",
  GOOD_ICON = "good",
  EXCELLENT_ICON = "excellent",
  { red, green, darkYellow } = colors;

export const Range = () => {
  const [range, setRange] = useState(0);
  const [color, setColor] = useState(red);
  const [icon, setIcon] = useState(BAD_ICON);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = 0;
    inputRef.current.addEventListener("input", (e) => setRange(e.target.value));
  }, []);

  useEffect(() => {
    const BAD = 25,
      NORMAL = 50,
      GOOD = 75,
      EXCELLENT = 100;

    if (isRange()) setColorAndIcon(red, BAD_ICON);
    else if (isRange(BAD, NORMAL)) setColorAndIcon(darkYellow, NORMAL_ICON);
    else if (isRange(NORMAL, GOOD)) setColorAndIcon(green, GOOD_ICON);
    else if (isRange(NORMAL, EXCELLENT)) setColorAndIcon(green, EXCELLENT_ICON);

    inputRef.current.style.background = `linear-gradient(to right, ${color} ${range}%, transparent ${range}%)`;
  }, [range]);

  const isRange = (start = 0, finish = 25 /*default BAD RANGE */) => {
    return range > start && range <= finish;
  };

  const setColorAndIcon = (color, icon) => {
    setColor(color);
    setIcon(icon);
  };

  return (
    <div className="range_wrapper">
      <div className="header_rate">
        <span className="title">O`quv rejasi:</span>
        <span className="percent">{range} %</span>
      </div>
      <div className="range_content">
        <div className="icon_wrapper">
          <Icon name={icon} color={color} />
        </div>
        <div className="range_input_wrapper">
          <input ref={inputRef} className={`input-${icon}`} type="range" />
        </div>
      </div>
    </div>
  );
};
