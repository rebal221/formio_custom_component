
import React from 'react';
import CardComponent from '../../components/designmolecules/CardComponent/index';
import style from './style.module.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleBuilderClick = () => {
        navigate('/form-builder');
    };

    const handleDisplayFormsClick = () => {
        console.log('Display Forms');
    };

    return (
        <div className={style.home_page}>
            <CardComponent
                logoSrc={logo}
                description="Welcome, App for testing Form.io with React."
                onBuilderClick={handleBuilderClick}
                onDisplayFormsClick={handleDisplayFormsClick}
            />
        </div>
    );
};

export default HomePage;
