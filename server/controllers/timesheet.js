import Employee from "../models/Employee.js";
import Timesheet from "../models/Timesheet.js";


export const getEmployeeTimesheets = async (req, res) => {
    try{
        const {id} = req.params;
        const timesheets = await Timesheet.find({employeeNumber: id});
        res.status(200).json(timesheets);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const getEmployeesTimesheets = async (req, res) => {
    try{
        const timesheets = await Timesheet.find();
        res.status(200).json(timesheets);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const getEmployeesTimesheetsByDate = async (req, res) => {
    try{
        console.log(req.query)
        // const timesheets = await Timesheet.find();
        // res.status(200).json(timesheets);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}



export const createTimesheet = async (req, res) => {
    try{
        const employee = await Employee.find({employeeNumber: req.body.employeeNumber});
        const newPost = new Timesheet({
            firstName: employee[0].firstName,
            lastName: employee[0].lastName,
            employeeNumber: employee[0].employeeNumber,
            periodStarting: req.body.periodStarting,
            periodEnding: req.body.periodEnding,
            friday1: req.body.friday1,
            saturday1: req.body.saturday1,
            sunday1: req.body.sunday1,
            monday1: req.body.monday1,
            tuesday1: req.body.tuesday1,
            wednesday1: req.body.wednesday1,
            thursday1: req.body.thursday1,
            friday2: req.body.friday2,
            saturday2: req.body.saturday2,
            sunday2: req.body.sunday2,
            monday2: req.body.monday2,
            tuesday2: req.body.tuesday2,
            wednesday2: req.body.wednesday2,
            thursday2: req.body.thursday2
        })

        await newPost.save()
        res.status(201).json(newPost)
    }catch(err){
        res.status(409).json({message: err.message});
    }
}