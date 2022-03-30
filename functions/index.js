const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KiWB8SFGbjYUwJCn9i011e0HkRbbu6UjU4J4XxcgRj5xfaVrxkOnWrJfotJ0aL7NUwCwQd5toDVPrpn8OmMa37700dpqSktVW"
);

// API
// AppConfig
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// ApiRoutes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  // OK-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
})  ;

// Listen command
exports.api = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
