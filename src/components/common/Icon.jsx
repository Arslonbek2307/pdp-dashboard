import React from "react";
import icons from "../../services/icons.json";

export const Icon = ({ name, color, width, height }) => {
  const { path, viewBox } = icons[name];
  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <path d={path} fill={color} />
    </svg>
  );
};
