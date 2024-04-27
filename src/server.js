/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from "express";
import cors from "cors";
import { corsOptions } from "~/config/cors";
import exitHook from "async-exit-hook";
import { CONNECT_DB, CLOSE_DB } from "~/config/mongodb";
import { env } from "~/config/environment";
import { APIs } from "~/routes/Api";
import { errorHandlingMiddleware } from "~/middlewares/errorHandlingMiddleware";

const START_SERVER = () => {
  const app = express();

  app.use(cors(corsOptions));

  app.use(express.json());
  /// QUAN TÂM CÁI NÀY
  app.use("/api", APIs);

  // Middleware xử lý lỗi tập trung
  app.use(errorHandlingMiddleware);

  if (env.BUILD_MODE === "production") {
    app.listen(process.env.PORT, () => {
      console.log(
        `3. Production: Hi ${env.AUTHOR}, Back-end Server is running successfully at Port: ${process.env.PORT}`
      );
    });
  } else {
    // Môi trường Local Dev
    app.listen(env.LOCAL_DEV_APP_PORT, env.LOCAL_DEV_APP_HOST, () => {
      console.log(
        `3. Local DEV: Hi ${env.AUTHOR}, Back-end Server is running successfully at Host: ${env.LOCAL_DEV_APP_HOST} and Port: ${env.LOCAL_DEV_APP_PORT}`
      );
    });
  }

  exitHook(() => {
    console.log("4. Server is shutting down...");
    CLOSE_DB();
    console.log("5. Disconnected from MongoDB Cloud Atlas");
  });
};

// Chỉ khi Kết nối tới Database thành công thì mới Start Server Back-end lên.
// Immediately-invoked / Anonymous Async Functions (IIFE)
(async () => {
  try {
    console.log("1. Connecting to MongoDB Cloud Atlas...");
    await CONNECT_DB();
    console.log("2. Connected to MongoDB Cloud Atlas!");

    // Khởi động Server Back-end sau khi đã Connect Database thành công
    START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();

// // Chỉ khi Kết nối tới Database thành công thì mới Start Server Back-end lên.
// console.log('1. Connecting to MongoDB Cloud Atlas...')
// CONNECT_DB()
//   .then(() => console.log('2. Connected to MongoDB Cloud Atlas!'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })
