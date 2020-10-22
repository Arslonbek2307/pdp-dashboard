import React from "react";
import { Icon } from "../../common/Icon";
import { colors } from "../../../utility";

export const DegreesBox = ({
  order_number,
  star_number,
  degrees_name,
  selected,
  onSelect,
}) => {
  const { darkYellow, disabled } = colors;
  const color = selected ? darkYellow : disabled;
  return (
    <div
      className={`degrees_box_wrapper ${selected && "no_opacity"}`}
      onClick={onSelect}
    >
      <p className="order_number">{order_number}</p>
      <div className="star">
        <Icon name="star" color={color} />
        <span className="star_number">{star_number}</span>
      </div>
      <span className="degrees_name">{degrees_name}</span>
    </div>
  );
};
