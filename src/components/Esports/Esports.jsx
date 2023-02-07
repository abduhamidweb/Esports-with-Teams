import React from "react";
import logoImg from "../../images/LogoSectionEA.png";
import EASectionButton from "../EASectionButton/EASectionButton";
import "./styleeEASection.css";
import cardImg1 from "../../images/PubgImg.jpg";
import cardImg2 from "../../images/AOVImg.jpg";
import cardImg3 from "../../images/FreeFireImg.jpg";
import cardImg4 from "../../images/Pubg2Img.jpg";
import cardImg5 from "../../images/ApexImg.jpg";
import arrowBtn from "../../images/ArrowBottomIcon.svg";
import GameCard from "../GameCard/GameCard";
const Esports = () => {
  return (
    <>
      <section className="ea">
        <div className="container">
          <div className="infoWrapp">
            <div className="leftLogo d-flex align-items-center">
              <img src={logoImg} alt="section-logo" title="logo" />
              <h2 className="logoTitle m-0 p-0"> Esports</h2>
            </div>

            <div className="rightBtn">
              <EASectionButton btnClassName={"EABtn"} btnText={"Works"} />
              <EASectionButton btnClassName={"EABtn"} btnText={"Archive"} />
              <EASectionButton btnClassName={"EABtn"} btnText={"Infomation"} />
            </div>
          </div>

          <div className="EACardsWrapp">
            <GameCard
              cardClassName={"gameCard"}
              cardGameImg={cardImg1}
              cardImgClassName={"gameCardImages"}
            />
            <GameCard
              cardClassName={"gameCard"}
              cardGameImg={cardImg2}
              cardImgClassName={"gameCardImages"}
            />
            <GameCard
              cardClassName={"gameCard"}
              cardGameImg={cardImg3}
              cardImgClassName={"gameCardImages"}
            />
            <GameCard
              cardClassName={"gameCard"}
              cardGameImg={cardImg4}
              cardImgClassName={"gameCardImages"}
            />
            <GameCard
              cardClassName={"gameCard"}
              cardGameImg={cardImg5}
              cardImgClassName={"gameCardImages"}
            />
          </div>

          <div className="textInfoWrapp">
            <p className="bottomInfoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A pretium elit nisi ac scelerisque. Mattis interdum tellus nulla pharetra sit eget. Sollicitudin ultrices dolor, ultrices mi ut. Hendrerit odio nec vel etiam. Vitae, fusce sit id aliquet blandit risus condimentum. Urna pellentesque quis ut mattis pretium aliquam arcu congue. </p>

            <a href="#"><img src={arrowBtn} alt="arrow-img" className="arrowImg"/></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Esports;
