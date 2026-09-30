const express = require("express");
const router = express.Router();

// 1. First variables-a require panni import pannanum
const {
  register,
  login,
  refresh,
  logout
} = require("../controllers/authController");

// 2. Adhukku apparam thaan console.log use pannanum
console.log({
  register: typeof register,
  login: typeof login,
  refresh: typeof refresh,
  logout: typeof logout
});

// 3. Routes setup
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

module.exports = router;