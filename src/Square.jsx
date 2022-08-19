import React from "react";

const Square = (props) => {
  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };
  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? <img src="https://media.discordapp.net/attachments/872546813566148621/1010235702430142534/Untitled_Artwork.png?width=707&height=676" /> : props.squareValue}
    </div>
  );
};

export default Square;