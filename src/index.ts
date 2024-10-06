// Init the http server from  express
import express from "express";
import httpStatus from "http-status-codes";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

const port =  process.env.PORT || 8089;

app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    status: "SUCCESS",
    message: "Hello World...",
  });
});

app.get("/greeting/:name", (req, res) => {
  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    status: "SUCCESS",
    message: `Hello ${req.params.name}`,
  });
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})