import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
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
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        role: String,
    },
    {timestamps: true}
)

const Employee = mongoose.model('Employee', EmployeeSchema)
export default Employee;