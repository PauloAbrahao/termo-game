import React from "react";

const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Você ganhou :)</h1>
          <p className="solution">{solution}</p>
          <p>Você acertou a palavra após {turn} tentativa(s)! </p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Você perdeu :(</h1>
          <p className="solution">{solution}</p>
          <p>Boa sorte na próxima vez! </p>
        </div>
      )}
    </div>
  );
};

export default Modal;
