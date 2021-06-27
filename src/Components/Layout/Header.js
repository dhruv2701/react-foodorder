import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import styles from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'

function Header(props){
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="delicious menu"/> 
            </div>
        </React.Fragment>
    )
}
export default Header