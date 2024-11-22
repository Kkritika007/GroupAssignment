require('dotenv').config();  // Ensure .env is loaded
const express = require('express');
const path = require('path');
const Stripe = require('stripe');
const exphbs = require('express-handlebars'); // Correct import

// Initialize Express app
const app = express();

// Load Stripe secret key from environment variables
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Ensure all required environment variables are available
if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PUBLIC_KEY || !process.env.HOST) {
  console.error('Missing environment variables. Please check your .env file.');
  process.exit(1);
}

// Set up Handlebars as the view engine
app.engine('hbs', exphbs.engine({ extname: 'hbs' }));  // Updated way to initialize Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS)
app.use(express.static('public'));

// Middleware to parse JSON data
app.use(express.json());  // Add this to handle JSON requests

// Route to render the product page
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Product Checkout', 
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY  // Pass the public key to the template
  });
});

// Payment route (to create a Stripe session)
app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Product 1',
            },
            unit_amount: 1000, // $10 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/cancel`,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Error creating session:', err);
    res.status(500).send({ error: 'Internal Server Error: ' + err.message });
  }
});

// Success route
app.get('/success', (req, res) => {
  res.render('success', { title: 'Payment Successful!' });
});

// Cancel route
app.get('/cancel', (req, res) => {
  res.render('cancel', { title: 'Payment Failed' });
});

// Start server
app.listen(3001, () => console.log('Server running on port 3001'));  // Corrected port
