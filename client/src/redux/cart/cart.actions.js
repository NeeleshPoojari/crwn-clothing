import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item =>  ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
  });  
 
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () =>({
  type: CartActionTypes.CLEAR_CART
})

export const updateUserCartAction = (cartItems) =>({
  type:  CartActionTypes.UPDATE_USER_CART,
  payload: cartItems
})

export const paymentSuccessClearCart = () => ({
  type:  CartActionTypes.PAYMENT_SUCCESS_CLEAR_CART
})
