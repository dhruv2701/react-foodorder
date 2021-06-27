import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';
function HeaderCartButton(props) {
    const ctx = useContext(CartContext)
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

    const noOfCartItems = ctx.items.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.amount
    }, 0)

    useEffect(()=>{
        if(ctx.items.length===0)
        return;
        setBtnIsHighlighted(true)
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false)
        }, 300)

        return()=>{
            clearTimeout(timer)
        }

    }, [ctx.items])

    
    return (
        <button className={`${styles.button} ${btnIsHighlighted && styles.bump}`} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{noOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;