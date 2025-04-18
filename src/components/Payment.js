import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your_publishable_key");

const PaymentForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // Send paymentMethod.id to your backend
      onSuccess(paymentMethod.id);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="payment-methods">
        <div className="payment-method active">
          <input type="radio" name="payment" id="card" defaultChecked />
          <label htmlFor="card">Credit/Debit Card</label>
        </div>
        <div className="payment-method">
          <input type="radio" name="payment" id="paypal" />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="payment-method">
          <input type="radio" name="payment" id="apple" />
          <label htmlFor="apple">Apple Pay</label>
        </div>
        <div className="payment-method">
          <input type="radio" name="payment" id="google" />
          <label htmlFor="google">Google Pay</label>
        </div>
      </div>

      <div className="card-element-container">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

const Payment = ({ amount, onSuccess }) => {
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <Elements stripe={stripePromise}>
        <PaymentForm amount={amount} onSuccess={onSuccess} />
      </Elements>
    </div>
  );
};

export default Payment;
