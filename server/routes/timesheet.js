import express from "express";
import {
    getEmployeeTimesheets,
    getEmployeesTimesheets,
    getEmployeesTimesheetsByDate,
    createTimesheet
} from "../controllers/timesheet.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id/history", verifyToken, getEmployeeTimesheets);

router.get("/", verifyToken, getEmployeesTimesheets);

router.get("/date", verifyToken, getEmployeesTimesheetsByDate);


//Write
router.post("/createTimesheet", verifyToken, createTimesheet);

export default router;