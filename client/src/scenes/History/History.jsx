import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "scenes/Sidebar";
import TimesheetsWidget from "scenes/widgets/TimesheetsWidget"

const History = () => {
    const {id} = useParams()

    // console.log(id)
    return(
        <Box display="flex">
            <Sidebar />
            <Box>
                <TimesheetsWidget userId={id}/>
            </Box>
        </Box>
    )
}

export default History