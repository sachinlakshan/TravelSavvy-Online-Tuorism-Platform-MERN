const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors');
require("dotenv").config();
const hotelRoute = require('./routes/hotels');
const userRoutes = require('./routes/user');
const roomRoute = require('./routes/rooms');
const eventRoute = require('./routes/EventRoute');
const wishListRoute = require('./routes/WishListRoute');
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`App listen on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


app.use("/api/user", userRoutes);
app.use('/api/hotel/',hotelRoute);
app.use('/api/rooms/',roomRoute);
app.use('/api/event', eventRoute);
app.use('/api/wishlist', wishListRoute);


app.use((err,req,res,next)=>{
  const errStatus = err.status || 500
  const errMessage = err.message || 'Something went wrong'
  return res.status(errStatus).json(errMessage)
})


