import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const Publishablekey = 'pk_test_51IYDRLF7KqzjjW2tU8kvbqog3R7FSOOxJcPgQQdQSayBxxyd88KgszOTswta2HAAP5Wp9wFe44oqkVNJxE9FPqDx00wgZPik22';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            mame='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your otal is $${price}`}
            omount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={Publishablekey}
        />
    );
};

export default StripeCheckoutButton;