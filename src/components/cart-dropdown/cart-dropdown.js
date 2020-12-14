import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-Item/cart-item';
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                <CartItem key={CartItem.id} item={cartItem}/>))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartDropdown);