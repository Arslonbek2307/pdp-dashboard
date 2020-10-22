import React from "react";
import { colors } from "../../../utility";
import { Icon } from "../../global-common/Icon";

export const DegreesController = ({ onSelect, degreess, currentId }) => {
  const { dark, disabled } = colors;
  const WHAT_BTN_NAME = "prev";

  const getActive = (name) => {
    let active = true;
    active =
      name === WHAT_BTN_NAME
        ? degreess[0].id !== currentId
        : degreess[degreess.length - 1].id !== currentId;
    return active;
  };

  const Button = ({ name }) => {
    const active = getActive(name);
    const id = name === WHAT_BTN_NAME ? currentId - 1 : currentId + 1;

    return (
      <div
        className={`next ${active && "active"}`}
        onClick={() => active && onSelect(id)}
      >
        <Icon
          name={name}
          color={active ? dark : disabled}
          width={15}
          height={15}
        />
      </div>
    );
  };

  return (
    <div className="degrees_controller_wrapper">
      <Button name="prev" />
      <div className="border" />
      <Button name="next" />
    </div>
  );
};
