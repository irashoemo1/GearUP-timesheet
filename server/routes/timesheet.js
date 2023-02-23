import express from "express";
import {
    getEmployeeTimesheets,
    getEmployeesTimesheets,
    createTimesheet
} from "../controllers/timesheet.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id/history", verifyToken, getEmployeeTimesheets);

router.get("/", verifyToken, getEmployeesTimesheets);


//Write
router.post("/createTimesheet", verifyToken, createTimesheet);

export default router;