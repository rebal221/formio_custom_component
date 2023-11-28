import React from 'react';
import style from './style.module.css' 

const CardComponent = ({ logoSrc, description, onBuilderClick, onDisplayFormsClick }) => {
    return (
        <div className={style.card}>
            <img src={logoSrc} alt="Logo" className={style.logo} />
            <p className={style.description}>{description}</p>
            <div className={style.buttons}>
                <button onClick={onBuilderClick}>Go to Builder</button>
                <button onClick={onDisplayFormsClick}>Display Forms</button>
                <button>Do Nothing</button>
            </div>
        </div>
    );
};

export default CardComponent;