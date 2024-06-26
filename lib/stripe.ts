import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key. Please ensure it's set in your environment variables.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
    typescript: true,
});
