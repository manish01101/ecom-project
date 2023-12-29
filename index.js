import mongoose from "mongoose";
import app from './src/app.js';
import config from "./src/config/index.js";

// create a method & run it-> self invoking fn
// self invoking fn-> first paren fn body, sec paren invoke
( async () => {
  try {
    await mongoose.connect(config.MONOGODB_URL)
    console.log("db connected!")

    app.on('err', (err) => {
      console.error("ERROR: ", err);
    throw err
    })

    app.listen(config.PORT, () => {console.log(`listening on port ${config.PORT}...`)});

  } catch (err) {
    console.error("ERROR: ", err)
    throw err
  }
})()