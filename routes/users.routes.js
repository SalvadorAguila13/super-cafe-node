const { Router } = require("express");
const { getUser, postUser, putUser, patchUser, deleteUser } = require("../controllers/users.controller");
const router = Router();

router.get("/", getUser)

router.post("/", postUser)

router.put("/", putUser)
router.put("/:id", putUser)

router.patch("/", patchUser)

router.delete("/", deleteUser)



module.exports = router;
