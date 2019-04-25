import React from "react";

const Slide = ({ image }) => {
  console.log(image)
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slide" style={styles} />;
};

export default Slide;
