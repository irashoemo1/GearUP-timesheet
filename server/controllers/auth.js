import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
import Employee from "../models/Employee.js";

// Register Employee
export const register = async (req, res) => {
    try{
        const {
            firstName,
            lastName,
            employeeNumber,
            email,
            password,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newEmployee = new Employee({
            firstName,
            lastName,
            employeeNumber,
            email,
            password: passwordHash,
            role: "employee"
        });

        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

// Logging in
export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const employee = await Employee.findOne({email: email});
        if(!employee) return res.status(400).json({msg: "Employee does not exist. "});

        const isMatch = await bcrypt.compare(password, employee.password);
        if(!isMatch)  return res.status(400).json({msg: "Invalid credentials. "});

        const token = jwt.sign({id: employee._id}, process.env.JWT_SECRET);
        delete employee.password;
        res.status(200).json({token, employee})

    }catch(err){
        res.status(500).json({error: err.message});
    }
}