import React from "react";

import data from "../data/db.json";

const Keypads = ({ usedKeys, setCurrentGuess, currentGuess }) => {
  const [letters, setLetters] = React.useState(null);

  React.useEffect(() => {
    setLetters(data.letters);
  }, []);

  // const handleClick = (e) => {

  //   console.log(e.target.innerText);

  //   if (currentGuess.length < 5) {
  //     setCurrentGuess((prev) => prev + e.target.innerText);
  //   }

  //   if (e.target.innerText === "⇐") {
  //     e.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Backspace'}));
  //   }

  // };

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];

          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypads;
