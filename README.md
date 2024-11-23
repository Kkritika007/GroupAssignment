
# Stripe Payment Demo Application

A simple web application that demonstrates how to integrate the **Stripe API** for a seamless product checkout experience. This application features a responsive UI, secure payment processing, and custom success and cancel pages to handle transactions.

---

## Features

- **Product Catalog**: Display of products with images, descriptions, and prices.
- **Stripe Integration**: Secure payment processing using the Stripe Checkout API.
- **Custom Pages**: Dynamic success and cancel pages for transaction results.
- **Responsive Design**: User-friendly interface using Bootstrap and custom CSS.
- **Testing Support**: Supports Stripe test cards for verifying payment functionality.

---

## Prerequisites

Ensure the following are installed on your system before running the project:

1. **Node.js** (v14.x or later)
2. **npm** (Node Package Manager)
3. **VS Code** (Recommended IDE)
4. A **Stripe Account** to obtain your API keys.

---

## Setup Instructions

### 1. Clone the Repository

Clone the repository and navigate to the project directory:

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies

Run the following command to install the required packages:

```bash
npm install express dotenv express-handlebars 

```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory and add the following keys:

```env
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Replace `your_stripe_public_key` and `your_stripe_secret_key` with your actual Stripe keys from the [Stripe Dashboard](https://dashboard.stripe.com).

### 4. Start the Server

Start the application using:

```bash
npm start 
```

The app will be accessible at [http://localhost:3001](http://localhost:3001).

---

## File Structure

```plaintext
project-root/
├── public/
│   ├── images/             # Product images
│   └── styles.css          # Custom CSS for styling
├── views/
│   ├── index.hbs           # Homepage with product listings
│   ├── success.hbs         # Payment success page
│   └── cancel.hbs          # Payment failure page
├── server.js                  # Main server file
├── .env                    # Environment variables (not shared)
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation (this file)
```

---

## Testing Payments

You can test the application using the following **Stripe Test Card Details**:

| **Card Number**        | **Expiry Date** | **CVV** | **Result**             |
|-------------------------|-----------------|---------|------------------------|
| 4242 4242 4242 4242     | 12/34           | 123     | Successful Payment     |
| 4000 0000 0000 0002     | 12/34           | 123     | Payment Declined       |
| 4000 0027 6000 3184     | 12/34           | 123     | Requires Authentication|

For additional test cases, refer to the [Stripe Test Documentation](https://stripe.com/docs/testing).

---

## Styling and Aesthetics

The application uses **Bootstrap** for responsiveness and a custom CSS file (`styles.css`) for additional styling. Highlights include:

- **Card Hover Effects**: Adds a zoom-in effect on product images.
- **Custom Page Styles**: Unique designs for the success and cancel pages.

---

## Useful VS Code Extensions

Here are some recommended extensions to enhance your development experience:

1. **Prettier** - Code formatter for maintaining clean and consistent code.
2. **ESLint** - For identifying and fixing coding issues.
3. **dotenv** - Adds syntax highlighting for `.env` files.
4. **GitLens** - Provides detailed insights into version control.
5. **Live Server** - For real-time updates during development.

---

## Credits

- **Stripe**: For the payment gateway API.
- **Bootstrap**: For the responsive and modern design framework.
- **Node.js**: For building the server-side logic.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute it as needed.

---
