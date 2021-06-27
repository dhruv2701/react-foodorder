import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css'
import CartItem from './CartItem';

function Cart(props) {
    const ctx = useContext(CartContext)

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    const hasItems = ctx.items.length>0

    const cartItemRemoveHandler = (id)=>{
        ctx.removeItem(id);
    }
    const cartItemAddHandler = (item)=>{
        ctx.addItem({...item, amount:1})

    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {ctx.items.map(item=>
                <CartItem  
                    key={item.id}  
                    name={item.name} 
                    price={item.price} 
                    amount={item.amount} 
                    onAdd={cartItemAddHandler.bind(null, item)} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}/>
                )}  
        </ul>
    )
    return (
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;