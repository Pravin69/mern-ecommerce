const express = require("express");
const { fetchUserById, updateUser } = require("../controller/User");

const router = express.Router();

router.patch("/", updateUser).get("/own", fetchUserById);

exports.router = router;
