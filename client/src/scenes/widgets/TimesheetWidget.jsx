import { Box, TextField, useTheme, useMediaQuery } from "@mui/material";
import TimesheetWrapper from "components/TimesheetWrapper";
import "./Timesheet.css";

const TimesheetWidget = ({
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
}) => {
    return (
        <TimesheetWrapper key={_id}>
            <Box
                display="grid"
                id="timesheet"
            >
                <TimesheetWrapper >
                    <TextField 
                        label="First Name"
                        value={firstName}
                    />
                    <TextField 
                        label="Last Name"
                        value={lastName}
                    />   
                    <TextField 
                        label="Employee Number"
                        value={employeeNumber}
                        sx={{gridColumn: "span 2"}}
                    />  
                    <TextField 
                        label="Period Ending"
                        value={periodEnding.toString().slice(0, 10)}
                        sx={{gridColumn: "span 2"}}
                    />
                    {friday1 && (
                        <table>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                    <th>Sun</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                    <th>Sun</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>4/10</th>
                                    <th>4/11</th>
                                    <th>4/12</th>
                                    <th>4/13</th>
                                    <th>4/14</th>
                                    <th>4/15</th>
                                    <th>4/16</th>
                                    <th>4/17</th>
                                    <th>4/18</th>
                                    <th>4/19</th>
                                    <th>4/20</th>
                                    <th>4/21</th>
                                    <th>4/22</th>
                                    <th>4/23</th>
                                </tr>
                                <tr>
                                    <th>In</th>
                                    <td><TextField        
                                            value={friday1.clockIn1}
                                        /></td>
                                    <td><TextField        
                                            value={saturday1.clockIn1}
                                        /></td>
                                    <td><TextField        
                                            value={sunday1.clockIn1}
                                        /></td>
                                    <td><TextField        
                                            value={monday1.clockIn1}
                                        /></td>
                                    <td><TextField
            
                                            value={tuesday1.clockIn1}
                                        /></td>
                                    <td><TextField
                                            value={wednesday1.clockIn1}
                                        /></td>
                                    <td><TextField
                                            value={thursday1.clockIn1}
                                        /></td>
                                    <td><TextField
                                            value={friday2.clockIn1}
                                        /></td>
                                    <td><TextField        
                                            value={saturday2.clockIn1}
                                        /></td>
                                    <td><TextField
            
                                            value={sunday2.clockIn1}
                                        /></td>
                                    <td><TextField
            
                                            value={monday2.clockIn1}
                                        /></td>
                                    <td><TextField
            
                                            value={tuesday2.clockIn1}
                                        /></td>
                                    <td><TextField
            
                                            value={wednesday2.clockIn1}
                                        /></td>
                                    <td><TextField
            
                                            value={thursday2.clockIn1}
                                        /></td>
                                </tr>
                                <tr>
                                    <th>Out</th>
                                    <td><TextField 
                                            value={friday1.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={saturday1.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={sunday1.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={monday1.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday1.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday1.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={thursday1.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={friday2.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={saturday2.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={sunday2.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={monday2.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday2.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday2.clockOut1}
                                        /></td>
                                    <td><TextField 
                                            value={thursday2.clockOut1}
                                        /></td>
                                </tr>
                                <tr>
                                    <th>In</th>
                                    <td><TextField 
                                            value={friday1.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={saturday1.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={sunday1.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={monday1.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday1.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday1.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={thursday1.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={friday2.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={saturday2.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={sunday2.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={monday2.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday2.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday2.clockIn2}
                                        /></td>
                                    <td><TextField 
                                            value={thursday2.clockIn2}
                                        /></td>
                                </tr>
                                <tr>
                                    <th>Out</th>
                                    <td><TextField 
                                            value={friday1.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={saturday1.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={sunday1.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={monday1.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday1.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday1.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={thursday1.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={friday2.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={saturday2.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={sunday2.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={monday2.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday2.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday2.clockOut2}
                                        /></td>
                                    <td><TextField 
                                            value={thursday2.clockOut2}
                                        /></td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td><TextField 
                                            value={friday1.total}
                                        /></td>
                                    <td><TextField 
                                            value={saturday1.total}
                                        /></td>
                                    <td><TextField 
                                            value={sunday1.total}
                                        /></td>
                                    <td><TextField 
                                            value={monday1.total}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday1.total}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday1.total}
                                        /></td>
                                    <td><TextField 
                                            value={thursday1.total}
                                        /></td>
                                    <td><TextField 
                                            value={friday2.total}
                                        /></td>
                                    <td><TextField 
                                            value={saturday2.total}
                                        /></td>
                                    <td><TextField 
                                            value={sunday2.total}
                                        /></td>
                                    <td><TextField 
                                            value={monday2.total}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday2.total}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday2.total}
                                        /></td>
                                    <td><TextField 
                                            value={thursday2.total}
                                        /></td>
                                </tr>
                                <tr>
                                    <th>Leave</th>
                                    <td><TextField 
                                            value={friday1.leave}
                                        /></td>
                                    <td><TextField 
                                            value={saturday1.leave}
                                        /></td>
                                    <td><TextField 
                                            value={sunday1.leave}
                                        /></td>
                                    <td><TextField 
                                            value={monday1.leave}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday1.leave}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday1.leave}
                                        /></td>
                                    <td><TextField 
                                            value={thursday1.leave}
                                        /></td>
                                    <td><TextField 
                                            value={friday2.leave}
                                        /></td>
                                    <td><TextField 
                                            value={saturday2.leave}
                                        /></td>
                                    <td><TextField 
                                            value={sunday2.leave}
                                        /></td>
                                    <td><TextField 
                                            value={monday2.leave}
                                        /></td>
                                    <td><TextField 
                                            value={tuesday2.leave}
                                        /></td>
                                    <td><TextField 
                                            value={wednesday2.leave}
                                        /></td>
                                    <td><TextField 
                                            value={thursday2.leave}
                                        /></td>
                                </tr>
                            </tbody>
                        </table>  
                    )}  
                    
                </TimesheetWrapper>
            </Box>
        </TimesheetWrapper>
    )
}

export default TimesheetWidget;