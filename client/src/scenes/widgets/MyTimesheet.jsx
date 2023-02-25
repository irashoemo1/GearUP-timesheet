import {
    useTheme,
    useMediaQuery
} from "@mui/material";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setTimesheets } from "state";
import './Timesheet.css'
import Days from "./Days";

const timesheetSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    employeeNumber: yup.string().required("required"),
    periodStarting: yup.date().required("required"),
    periodEnding: yup.date().required("required"),
    friday1: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    saturday1: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    sunday1: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    monday1: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    tuesday1: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    wednesday1: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    thursday1: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    friday2: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    saturday2: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    sunday2: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    monday2: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    tuesday2: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    wednesday2: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    thursday2: yup.object().shape({
        day: yup.string(),
        clockIn1: yup.string(),
        clockOut1: yup.string(),
        clockIn2: yup.string(),
        clockOut2: yup.string(),
        total: yup.string(),
        leave: yup.string(),
    }),
    
})

const initialValuesTimesheet = {
    firstName: "",
    lastName: "",
    employeeNumber: "",
    periodStarting: "",
    periodEnding: "",
    friday1: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    saturday1: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave:''
    },
    sunday1: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    monday1: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    tuesday1: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    wednesday1: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    thursday1: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    friday2: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    saturday2: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    sunday2: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    monday2: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    tuesday2: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    wednesday2: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    },
    thursday2: {
        clockIn1: '',
        clockOut1: '',
        clockIn2: '',
        clockOut2: '',
        total: '',
        leave: ''
    }
}


const MyTimesheet = () => {
    const dispatch = useDispatch();

    const { palette } = useTheme();
    const { _id } = useSelector((state) => state.employee);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1281px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;

    const handleTimesheet = async (values) => {
        console.log(values)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/timesheet/createTimesheet`, {
            method: "POST",
            headers: {Authorization: `Bearer ${token}`, "Content-Type": "application/json"},
            body: JSON.stringify(values)
        })
        const timesheets = await response.json();
        dispatch(setTimesheets({ timesheets }));
    }

    return (
        <Days 
            handleTimesheet={handleTimesheet} 
            initialValuesTimesheet={initialValuesTimesheet} 
            timesheetSchema={timesheetSchema}
            isNonMobileScreens={isNonMobileScreens}
            palette={palette} 
        />
    )

}

export default MyTimesheet;