import Sidebar from "../Sidebar/index"
// import Timesheet from "../../components/Timesheet/Timesheet"
import { useSelector } from "react-redux";
import './Home.css'
import MyTimesheet from "scenes/widgets/MyTimesheet";
import AdminView from "scenes/widgets/AdminView"; 
import { Box } from "@mui/material";


const Home = (props) => {
    // const {theme} = props;
    const { role, _id } = useSelector((state) => state.employee);
    return (
        <div id='Home'> 
            <Box display="flex">
                <Sidebar />
                {role === "employee" ?
                    <MyTimesheet />
                    :
                    <Box>
                        <AdminView />
                    </Box>
                }
            </Box>
        </div>
    )    
}

export default Home