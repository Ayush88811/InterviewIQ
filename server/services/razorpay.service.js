// import dotenv from "dotenv";
// dotenv.config();
// import Razorpay from "razorpay";


// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// export default razorpay





import dotenv from "dotenv";
dotenv.config();

import Razorpay from "razorpay";

console.log(
    "RAZORPAY KEY:",
    process.env.RAZORPAY_KEY_ID ? "FOUND" : "NOT FOUND"
);

console.log(
    "RAZORPAY SECRET:",
    process.env.RAZORPAY_KEY_SECRET ? "FOUND" : "NOT FOUND"
);

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default razorpay;