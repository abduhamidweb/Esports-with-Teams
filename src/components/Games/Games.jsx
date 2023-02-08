import React from 'react';
import "./Games.css"
import rasm1 from "../../images/gusi.svg";
import rasm2 from "../../images/iconlar.svg"; 

const Games = () => {
    return (
      <>
        <section>
          <div className="container">
            <div className="wrapperGames ">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                  <div className="cardGames">
                    <img src={rasm2} alt="img" />
                    <h2>663</h2>
                    <p>Happy Player</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                  <div className="cardGames">
                    <img src={rasm1} alt="img" />
                    <h2>12+</h2>
                    <p>Esports</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                  <div className="cardGames">
                    <img src={rasm1} alt="img" />
                    <h2>10+</h2>
                    <p>Games</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 ">
                  <div className="cardGames">
                    <img src={rasm1} alt="img" />
                    <h2>6</h2>
                    <p>Famous Games</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Games;