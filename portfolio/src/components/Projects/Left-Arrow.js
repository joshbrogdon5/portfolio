import React from "react";

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      {/* <i className="fa fa-arrow-left fa-2x" aria-hidden="true" /> */}
      Left
    </div>
  );
};

export default LeftArrow;
