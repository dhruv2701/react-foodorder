import React from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css'
const BackDrop=(props)=>{
    return (
        <div className={styles.backdrop} onClick={props.onClickBackdrop}></div>
    )
}
const Overlay=(props)=>{
    return(
        <div className={styles.modal}>
            <div>{props.children}</div>
        </div>
    )
}
function Modal(props) {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop onClickBackdrop={props.onClick}/>, document.getElementById('overlays'))}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlays'))}
        </React.Fragment>
        
    );
}

export default Modal;