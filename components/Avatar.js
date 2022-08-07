import React from "react";

const Avatar = (props) => {
  return (
    <img
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
      loading="lazy ${props.className}`}
      src={props.url}
      alt="profile pic"
    />
  );
};

export default Avatar;
