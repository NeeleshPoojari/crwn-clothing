import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { updateCurrentUserCart, getCurrentUserCartData } from "../../firebase/firebase.utils";

import UserActionTypes from "../user/user.types";
import { CartActionTypes } from "../cart/cart.types";
import { clearCart, updateUserCartAction } from "./cart.actions";

export function* clearCartSignout() {
  console.log("Successful");
  yield put(clearCart());
}

export function* clearCartAfterPayment() {
  console.log("Successful");
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignout);
}

export function* updateUserCart() {
  console.log("called Cartsaga function");
  const CurrentUser = yield select(selectCurrentUser);
  const CurrentCartData = yield select(selectCartItems);
  yield call(updateCurrentUserCart, CurrentUser, CurrentCartData);
}

export function* getUserCartItems() {
  
  const CurrentUser = yield select(selectCurrentUser);
  const currentUsercartItems = yield call(getCurrentUserCartData, CurrentUser);
  yield put(updateUserCartAction(currentUsercartItems));

}

export function* OnCurrentUserCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateUserCart
  );
}


export function* getUserCart(){
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getUserCartItems);
}


export function* onPaymentSuccess() {
  console.log("On PaymentSuccess");
  yield takeLatest(
    CartActionTypes.PAYMENT_SUCCESS_CLEAR_CART,
    clearCartAfterPayment
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onPaymentSuccess),
    call(OnCurrentUserCartChange),
    call(getUserCart)
  ]);
}
