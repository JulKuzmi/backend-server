const getUsers = require("../modules/users");

const router = require("express").Router();

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.put("/users/:user_id", updateUser);
router.delete("/users/:user_id", deleteUser);

module.exports = router;
