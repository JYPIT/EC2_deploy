import express from "express";

const globalRouter = express.Router();

const home = async (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

globalRouter.get("/", home);

export default globalRouter;
