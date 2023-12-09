import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../Stripe.css";
import { useSelector } from "react-redux";
import { selectCurrentOrder } from "../features/order/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51OL39uSHL7FjbwYplxgU4MH24Q7WFOsBCoGUF607l5R5tupVScFFKMGDx7evKAYHWqpnGE3pU12TnorjysMMPRHM00cmMyOmmE"
);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const currentOrder = useSelector(selectCurrentOrder);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: currentOrder.totalAmount }),
      meta: {
        order_id: currentOrder.id,
        // This info will go to stripe and then to our webhook so we can conclude that payment was successful, even if client closes window after payment
      },
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [currentOrder]);

  const appearance = {
    theme: "flat",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
