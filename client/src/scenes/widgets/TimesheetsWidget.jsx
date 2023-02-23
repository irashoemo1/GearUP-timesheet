import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimesheets } from "state";
import TimesheetWidget from "./TimesheetWidget";


const TimesheetsWidget = ({userId}) => {
    const dispatch = useDispatch();
    const timesheets = useSelector((state) => state.timesheets);
    const token = useSelector((state) => state.token);

    const getEmployeeTimesheets = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/timesheet/${userId}/history`,
            {
                method: "GET",
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        const data = await response.json();
        dispatch(setTimesheets({timesheets: data}))
    }

    useEffect(() => {
        getEmployeeTimesheets();
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        {Object.values(timesheets).map(
            ({  
                _id,
                firstName,
                lastName,
                employeeNumber,
                periodEnding,
                friday1,
                saturday1,
                sunday1,
                monday1,
                tuesday1,
                wednesday1,
                thursday1,
                friday2,
                saturday2,
                sunday2,
                monday2,
                tuesday2,
                wednesday2,
                thursday2,
            }) => (
                <TimesheetWidget
                    key={_id} 
                    firstName={firstName}
                    lastName={lastName}
                    employeeNumber={employeeNumber}
                    periodEnding={periodEnding}
                    friday1={friday1}
                    saturday1={saturday1}
                    sunday1={sunday1}
                    monday1={monday1}
                    tuesday1={tuesday1}
                    wednesday1={wednesday1}
                    thursday1={thursday1}
                    friday2={friday2}
                    saturday2={saturday2}
                    sunday2={sunday2}
                    monday2={monday2}
                    tuesday2={tuesday2}
                    wednesday2={wednesday2}
                    thursday2={thursday2}
                />
            )
        )}
        </>
    )
}

export default TimesheetsWidget;