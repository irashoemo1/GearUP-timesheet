import mongoose from "mongoose";

const TimesheetSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        employeeNumber: {
            type: String,
            required: true
        },
        periodStarting: {
            type: Date,
            required: true
        },
        periodEnding: {
            type: Date,
            required: true
        },
        friday1: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        saturday1: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        sunday1: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        monday1: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        tuesday1: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        wednesday1: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        thursday1: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        friday2: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        saturday2: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        sunday2: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        monday2: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        tuesday2: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        wednesday2: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        },
        thursday2: {
            clockIn1: String,
            clockOut1: String,
            clockIn2: String,
            clockOut2: String,
            total: String,
            leave: String
        }
    },
    {timestamps: true}
)

const Timesheet = mongoose.model('Timesheet', TimesheetSchema)
export default Timesheet;