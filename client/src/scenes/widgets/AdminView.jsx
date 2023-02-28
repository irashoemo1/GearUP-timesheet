import { FormControl, MenuItem, Select, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimesheets } from "state";
import TimesheetWidget from "./TimesheetWidget"; 

const AdminView =  () => {
    const dispatch = useDispatch();
    const timesheets = useSelector((state) => state.timesheets);
    const token = useSelector((state) => state.token);
    const [mapArray, setMapArray] = useState([])
    let nameMap = new Map()

    const getEmployeesTimesheets = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/timesheet/`,
            {
                method: "GET",
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        const data = await response.json();
        dispatch(setTimesheets({timesheets: data}))
        // console.log(timesheets)
        timesheets.forEach((timesheet) => {
            nameMap.set(`${timesheet.firstName} ${timesheet.lastName}` ,{name: `${timesheet.firstName} ${timesheet.lastName}`, id: `${timesheet.employeeNumber}`})
        })

        let array = Array.from(nameMap, ([name, value]) => ({ value }));
        // console.log(array)
        setMapArray([...array])
    }

    const getEmployeesTimesheetsByDate = async (e) => {
        console.log(e.target)
        const response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/timesheet/date`,
            {
                method: "GET",
                headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}
            }
        )
        const data = await response.json();
        console.log(data)
    }

    const getEmployeeTimesheets = async (userId) => {
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
        getEmployeesTimesheets();
    }, []) //eslint-disable-line react-hooks/exhaustive-deps


    const handleClick = (e, userId) => {
        if(e.target.getAttribute("data-value") === "All"){
            getEmployeesTimesheets();
        }
        else{
            getEmployeeTimesheets(userId);
        }
    }

    // console.log(mapArray)
    //need to implement sort by date now then finished
    return (
        <>
            <div>
                <FormControl>
                    <Select value="" displayEmpty>
                        <MenuItem value="" disabled>
                        Filter By Employee
                        </MenuItem>
                        <MenuItem value="All" name="all"  onClick={(e) => handleClick(e)}>
                            All
                        </MenuItem>
                        {mapArray.map((employee) => (
                        <MenuItem key={employee.value.id} value={employee.value.name} onClick={(e) => handleClick(e, employee.value.id)}>
                            {employee.value.name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* <FormControl>
                    <Select value="" displayEmpty>
                        <MenuItem value="" disabled>
                            Sort By Date
                        </MenuItem>
                        <MenuItem value="Decreasing" name="Decreasing" onClick={(e) => getEmployeesTimesheetsByDate(e)}>
                            Decreasing
                        </MenuItem>
                        <MenuItem value="Increasing" name="Increasing" onClick={(e) => getEmployeesTimesheetsByDate(e)}>
                            Increasing
                        </MenuItem>
                    </Select>
                </FormControl> */}
            </div>
            
            {timesheets.length !== 0 && (Object.values(timesheets).map(
                ({  
                    _id,
                    firstName,
                    lastName,
                    employeeNumber,
                    periodStarting,
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
                        periodStarting={periodStarting}
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
            ))}
        </>
    )
}

export default AdminView;