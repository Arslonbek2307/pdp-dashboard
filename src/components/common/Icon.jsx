import React from "react";
import icons from "../../assets/icons/icons.json";

const DEFAULT_WIDTH = 18;
const DEFAULT_HEIGHT = 18;
const DEFAULT_ICON_NAME = "star";
const DEFAULT_ICON_COLOR = "#000";

export const Icon = ({
  name = DEFAULT_ICON_NAME,
  color = DEFAULT_ICON_COLOR,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  ...props
}) => {
  const { path, viewBox } = icons[name];
  return (
    <svg width={width} height={height} viewBox={viewBox} {...props}>
      <path d={path} fill={color} />
    </svg>
  );
};
