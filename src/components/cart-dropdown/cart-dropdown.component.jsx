import React from 'react';

import CustomButton from '../custom-button/coustom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO CHEKOUT</CustomButton>
    </div>
);

export default CartDropdown;