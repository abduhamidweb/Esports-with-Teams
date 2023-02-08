import React from 'react';
import "./Games.css"
import rasm1 from "../../images/gusi.svg";
import rasm2 from "../../images/iconlar.svg"; 

const Games = () => {
    return (
      <>
        <section>
          <div className="container">
            <div className="wrapperGames d-flex justify-content-between w-90">
              <div className="cardGames">
                <img src={rasm2} alt="img" />
                <h2>663</h2>
                <p>Happy Player</p>
              </div>
              <div className="cardGames">
                <img src={rasm1} alt="img" />
                <h2>12+</h2>
                <p>Esports</p>
              </div>
              <div className="cardGames">
                <img src={rasm1} alt="img" />
                <h2>10+</h2>
                <p>Games</p>
              </div>
              <div className="cardGames">
                <img src={rasm1} alt="img" />
                <h2>6</h2>
                <p>Famous Games</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Games;