const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
//const bodyParser = require("body-parser");
const categoryRouter = require('./routers/category.router');
const orderRouter = require('./routers/order.router');

const app = express();

app.use(cors());
//app.use(bodyParser);
app.use(express.json());

app.use('/category', categoryRouter);
app.use('/order', orderRouter);

(async function () {
      try {
            await mongoose.connect(config.MONGOOSE_URI);
            console.log('[mongoose]: Connected to DB.');
            app.listen(config.PORT, () => console.log(`[server]: Server is listening on port ${config.PORT}`));
      } catch (error) {
            console.log(error);
      }
})();


