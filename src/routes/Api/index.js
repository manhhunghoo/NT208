import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRoute } from "~/routes/Api/boardRoute";
import { columnRoute } from "~/routes/Api/columnRoute";
import { cardRoute } from "~/routes/Api/cardRoute";
import { userRoute } from "./userRoute";
import { courseRoute } from "./courseRoute";
import { itemRoute } from "./itemRoute";
import { videoRoute } from "./videoRoute";
import { postRoute } from "./postRoute";
import { notiRoute } from "./notiRoute";
import { baitapRoute } from "./baitapRoute";
import { studyRoute } from "./studyRoute";
import { cboxRoute } from "./commentBoxRoute";
import { commentRoute } from "./commentRoute";

const Router = express.Router();

/** Check APIs v1/status */
Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 are ready to use." });
});
Router.use("/courses", courseRoute);
Router.use("/users", userRoute);
/** Board APIs */
Router.use("/boards", boardRoute);

/** Column APIs */
Router.use("/columns", columnRoute);

/** Cards APIs */
Router.use("/cards", cardRoute);

//API liên quan đến Item (CHương học)
Router.use("/items", itemRoute);
Router.use("/videos", videoRoute);
Router.use("/posts", postRoute);
Router.use("/notis", notiRoute);
Router.use("/baitaps", baitapRoute);
Router.use("/studies", studyRoute);
Router.use("/cboxs", cboxRoute);
Router.use("/comments", commentRoute);

export const APIs = Router;
