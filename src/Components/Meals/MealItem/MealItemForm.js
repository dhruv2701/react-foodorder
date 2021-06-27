import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input/Input';
function MealItemForm(props) {

    const [amounIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
            setAmountIsValid(false)
            return;
        }
        setAmountIsValid(true)
        props.onAddtoCart(enteredAmountNumber)
    }


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountInputRef}
                input={{
                id: 'amount',
                type: 'Number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!amounIsValid && <p>Please enter a valid amount(1-5)</p>}
        </form>
    );
}

export default MealItemForm;