import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { paymentSuccessClearCart } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, paymentSuccessClearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_fYbpC2xmmXdJxduyy8u8Tmv9007Rxg8I01';

  const onToken = token => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Succesful!');
      paymentSuccessClearCart();
    }).catch(error => {
      console.log('Payment error:',error);

      alert(
        'There was an issue with your payment. Please sure you use provided credit card'
      )

    })
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is INR ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  paymentSuccessClearCart: () => dispatch(paymentSuccessClearCart())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
