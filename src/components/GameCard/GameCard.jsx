import React from 'react';
import "./styleGameCard.css"
const GameCard = ({cardClassName, cardGameImg, cardImgClassName}) => {
    return (
        <div className={cardClassName}>
            <img src={cardGameImg} alt="game-img" title='game-img' className={cardImgClassName}/>
        </div>
    );
};

export default GameCard;