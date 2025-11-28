const express = require("express");
const router = express.Router();
const classTeacherController = require("./class-teacher-controller");
const { checkApiAccess } = require("../../middlewares");

router.get("", checkApiAccess, classTeacherController.handleGetClassTeachers);
router.post("", classTeacherController.handleAddClassTeacher);
// router.post("", async(req, res) => {
//     console.log("Received request to add class teacher", req.body);
//     res.sendStatus(501); // Not Implemented
//     });
router.get("/:id", checkApiAccess, classTeacherController.handleGetClassTeacherDetail);
router.put("/:id", checkApiAccess, classTeacherController.handleUpdateClassTeacherDetail);

module.exports = { classTeacherRoutes: router };
