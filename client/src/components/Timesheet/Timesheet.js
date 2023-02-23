import './Timesheet.css'
// CAN PROBABLY GET RID OF THIS
const Timesheet = (props) => {
    const {theme} = props;
    // console.log(theme)
    const neutralLight = theme.palette.neutral.light;
    return (
        <div id='timesheet' >
            <div id='timecard' style={{backgroundColor: neutralLight}}>
                <form action="/timesheet/createTimesheet" method="POST">
                    <div id="employee-info">
                        <div className="employee-info-details" >
                            <label htmlFor="employeeNumber">Employee Number</label>
                            <input type="text" name="employeeNumber"></input>
                        </div>
                        <div className="employee-info-details" >
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName"></input>
                        </div>
                        <div className="employee-info-details" >
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName"></input>
                        </div>
                        <div className="employee-info-details" >
                            <label htmlFor="periodEnding">Period Ending</label>
                            <input type="text" name="periodEnding"></input>
                        </div>
                    </div>
                {/* under 660px need to transpose the table to be able to fit it on the screen. hide the original table and display the new one */}
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
                                <td><input type='text' name="clockinfri"></input></td>
                                <td><input type='text' name="clockinsat"></input></td>
                                <td><input type='text' name="clockinsun"></input></td>
                                <td><input type='text' name="clockinmon"></input></td>
                                <td><input type='text' name="clockintue"></input></td>
                                <td><input type='text' name="clockinwed"></input></td>
                                <td><input type='text' name="clockinthu"></input></td>
                                <td><input type='text' name="clockinfri2"></input></td>
                                <td><input type='text' name="clockinsat2"></input></td>
                                <td><input type='text' name="clockinsun2"></input></td>
                                <td><input type='text' name="clockinmon2"></input></td>
                                <td><input type='text' name="clockintue2"></input></td>
                                <td><input type='text' name="clockinwed2"></input></td>
                                <td><input type='text' name="clockinthu2"></input></td>
                            </tr>
                            <tr>
                                <th>Out</th>
                                <td><input type='text' name="clockoutfri"></input></td>
                                <td><input type='text' name="clockoutsat"></input></td>
                                <td><input type='text' name="clockoutsun"></input></td>
                                <td><input type='text' name="clockoutmon"></input></td>
                                <td><input type='text' name="clockouttue"></input></td>
                                <td><input type='text' name="clockoutwed"></input></td>
                                <td><input type='text' name="clockoutthu"></input></td>
                                <td><input type='text' name="clockoutfri2"></input></td>
                                <td><input type='text' name="clockoutsat2"></input></td>
                                <td><input type='text' name="clockoutsun2"></input></td>
                                <td><input type='text' name="clockoutmon2"></input></td>
                                <td><input type='text' name="clockouttue2"></input></td>
                                <td><input type='text' name="clockoutwed2"></input></td>
                                <td><input type='text' name="clockoutthu2"></input></td>
                            </tr>
                            <tr>
                                <th>In</th>
                                <td><input type='text' name="clockin2fri"></input></td>
                                <td><input type='text' name="clockin2sat"></input></td>
                                <td><input type='text' name="clockin2sun"></input></td>
                                <td><input type='text' name="clockin2mon"></input></td>
                                <td><input type='text' name="clockin2tue"></input></td>
                                <td><input type='text' name="clockin2wed"></input></td>
                                <td><input type='text' name="clockin2thu"></input></td>
                                <td><input type='text' name="clockin2fri2"></input></td>
                                <td><input type='text' name="clockin2sat2"></input></td>
                                <td><input type='text' name="clockin2sun2"></input></td>
                                <td><input type='text' name="clockin2mon2"></input></td>
                                <td><input type='text' name="clockin2tue2"></input></td>
                                <td><input type='text' name="clockin2wed2"></input></td>
                                <td><input type='text' name="clockin2thu2"></input></td>
                            </tr>
                            <tr>
                                <th>Out</th>
                                <td><input type='text' name="clockout2fri"></input></td>
                                <td><input type='text' name="clockout2sat"></input></td>
                                <td><input type='text' name="clockout2sun"></input></td>
                                <td><input type='text' name="clockout2mon"></input></td>
                                <td><input type='text' name="clockout2tue"></input></td>
                                <td><input type='text' name="clockout2wed"></input></td>
                                <td><input type='text' name="clockout2thu"></input></td>
                                <td><input type='text' name="clockout2fri2"></input></td>
                                <td><input type='text' name="clockout2sat2"></input></td>
                                <td><input type='text' name="clockout2sun2"></input></td>
                                <td><input type='text' name="clockout2mon2"></input></td>
                                <td><input type='text' name="clockout2tue2"></input></td>
                                <td><input type='text' name="clockout2wed2"></input></td>
                                <td><input type='text' name="clockout2thu2"></input></td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td><input type='text' name="totalfri"></input></td>
                                <td><input type='text' name="totalsat"></input></td>
                                <td><input type='text' name="totalsun"></input></td>
                                <td><input type='text' name="totalmon"></input></td>
                                <td><input type='text' name="totaltue"></input></td>
                                <td><input type='text' name="totalwed"></input></td>
                                <td><input type='text' name="totalthu"></input></td>
                                <td><input type='text' name="totalfri2"></input></td>
                                <td><input type='text' name="totalsat2"></input></td>
                                <td><input type='text' name="totalsun2"></input></td>
                                <td><input type='text' name="totalmon2"></input></td>
                                <td><input type='text' name="totaltue2"></input></td>
                                <td><input type='text' name="totalwed2"></input></td>
                                <td><input type='text' name="totalthu2"></input></td>
                            </tr>
                            <tr>
                                <th>Leave</th>
                                <td><input type='text' name="leavefri"></input></td>
                                <td><input type='text' name="leavesat"></input></td>
                                <td><input type='text' name="leavesun"></input></td>
                                <td><input type='text' name="leavemon"></input></td>
                                <td><input type='text' name="leavetue"></input></td>
                                <td><input type='text' name="leavewed"></input></td>
                                <td><input type='text' name="leavethu"></input></td>
                                <td><input type='text' name="leavefri2"></input></td>
                                <td><input type='text' name="leavesat2"></input></td>
                                <td><input type='text' name="leavesun2"></input></td>
                                <td><input type='text' name="leavemon2"></input></td>
                                <td><input type='text' name="leavetue2"></input></td>
                                <td><input type='text' name="leavewed2"></input></td>
                                <td><input type='text' name="leavethu2"></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <div id='certify'>
                        <div className='checkbox'>
                            <input type="checkbox"></input>
                        </div>
                        <p>I hereby certify the declared hours to be valid.</p>
                    </div>
                    <div id='personal-info'>
                        <div className="personal-info-details" >
                            <label htmlFor="Address">Address</label>
                            <input type="text" name="Address"></input>
                        </div>
                        <div className="personal-info-details" >
                            <label htmlFor="telephoneNumber">Telephone Number</label>
                            <input type="text" name="telephoneNumber"></input>
                        </div>
                    </div>
                    <div id='certify'>
                        <div className='checkbox'>
                            <input type="checkbox"></input>
                        </div>
                        <p>To the best of my knowledge, this time card is accurate.</p>
                    </div>
                    <div className='supervisor-signature'>
                        <h2>APPROVED BY:</h2>
                        <input type="text" placeholder="Supervisor's name" name="supervisorsName" ></input>
                    </div>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}




export default Timesheet
