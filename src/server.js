const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

const url =require("./mongodb");
mongoose.connect(url);

const UserRoutes = require('./routes/user_routes');
app.use("/user", UserRoutes);

const CategoryRoutes = require('./routes/category_routes');
app.use("/category", CategoryRoutes);

const ProductRoutes = require('./routes/product_routes');
app.use("/product", ProductRoutes);

const CartRoutes = require('./routes/cart_routes');
app.use("/cart", CartRoutes);



const PORT = 5000;
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));