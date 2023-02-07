import React from 'react';
import "./styleEASecBtn.css"
const EASectionButton = ({btnClassName, btnText}) => {
    return (
    <span>
        <button className={btnClassName}>{btnText}</button>
    </span>
    );
};

export default EASectionButton;