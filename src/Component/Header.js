import React from 'react';

function Header(props) {
    return (
        <div className='flex shopping-Card'>
            <div onClick={()=>props.handleShow(false)}>Shopping Cart</div>
            <div onClick={()=>props.handleShow(true)}>Cart <sup>{props.count}</sup></div>
        </div>
    );
}

export default Header;