import React, { useState } from "react";
import { DegreesController, DegreesBox } from "./common";
import { getDegrees } from "../../services/fakeServices";
import "../../styles/degrees.scss";

export const Degrees = () => {
  const degreess = getDegrees();
  const [currentId, setCurrentId] = useState(1);

  return (
    <div className="degrees_wrapper">
      {degreess.map(({ id, ...props }) => (
        <DegreesBox
          key={id}
          selected={currentId === id}
          onSelect={() => setCurrentId(id)}
          {...props}
        />
      ))}
      <DegreesController
        degreess={degreess}
        currentId={currentId}
        onSelect={setCurrentId}
      />
    </div>
  );
};
