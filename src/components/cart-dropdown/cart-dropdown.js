import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-Item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action'

import './cart-dropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                (cartItems.map(cartItem => (
                <CartItem key={CartItem.id} item={cartItem}/>
                )))
                :
                <span className='empty-message'>Your Cart Is Empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('./checkout');
            dispatch(toggleCartHidden())}}>
            GO TO CHECKOUT
        </CustomButton>
    
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));