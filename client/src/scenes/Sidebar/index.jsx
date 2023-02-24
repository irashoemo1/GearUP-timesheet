import './Sidebar.css'
import { useState } from 'react';
import {
    Box,
    IconButton,
    Typography,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {
    DarkMode,
    LightMode,
    Menu,
    Close
} from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { setMode, setLogout } from 'state';
import { useNavigate, Link } from 'react-router-dom';


const Sidebar = () => {
    //route to home or history
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employee = useSelector((state) => state.employee);
    const isNonMobileScreens = useMediaQuery("(min-width: 1281px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const primaryLight = theme.palette.primary.light;
    const neutralMed = theme.palette.neutral.medium;

    return (
        <div>
            {!isNonMobileScreens && (
                <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                    <Menu />
                </IconButton>
            )}
            <div id='sidebar' style={{backgroundColor: neutralMed}}>
                <Typography fontWeight="bold" 
                    fontSize="clamp(1rem, 2rem, 2.25rem)" 
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover":{
                            color: primaryLight,
                            cursor: "pointer"
                        }
                    }}
                >
                    Welcome {employee.firstName}
                </Typography>
                {isNonMobileScreens && (
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        { employee.role === "employee" && <li><Link to={`/${employee.employeeNumber}/history`}>History</Link></li>}
                    </ul>

                )}
                
                {/* Desktop sidebar */}
                {isNonMobileScreens ? (
                    <div>
                        <IconButton onClick={() => dispatch(setMode())}>
                            {theme.palette.mode === "dark" ? (
                                <DarkMode sx={{fontSize: "25px"}} />
                            ) : (
                                <LightMode sx={{color: dark, fontSize: "25px" }} />
                            )}
                        </IconButton>
                        <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
                    </div>
                ) : (
                    <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                        <Menu />
                    </IconButton>
                )}

                {/* Mobile sidebar */}
                {!isNonMobileScreens && isMobileMenuToggled && (
                    <Box 
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        position="fixed"
                        left="0"
                        bottom="0"
                        height="100%"
                        zIndex="10"
                        maxWidth="500px"
                        minWidth="300px"
                        margin="0px"
                        backgroundColor={neutralLight}
                    >
                        {/* Close icon */}
                        <Box p="1rem">
                            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                                <Close />
                            </IconButton>
                        </Box>

                        {/* Menu items */}
                        <Typography fontWeight="bold" 
                            fontSize="clamp(1rem, 2rem, 2.25rem)" 
                            onClick={() => navigate("/home")}
                            sx={{
                                "&:hover":{
                                    color: primaryLight,
                                    cursor: "pointer"
                                }
                            }}
                        >
                            Welcome {employee.firstName}
                        </Typography>
                        <ul>   
                            <li>
                                <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                                    <Link to='/home'>Home</Link>
                                </IconButton>
                            </li>
                            { employee.role === "employee" && 
                                <li>
                                    <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
                                    <Link to={`/${employee.employeeNumber}/history`}>History</Link>
                                    </IconButton>
                                </li>
                            }
                        </ul>
                        <div>
                            <IconButton onClick={() => dispatch(setMode())}>
                                {theme.palette.mode === "dark" ? (
                                    <DarkMode sx={{fontSize: "25px"}} />
                                ) : (
                                    <LightMode sx={{color: dark, fontSize: "25px" }} />
                                )}
                            </IconButton>
                            <div>
                                <FormControl>
                                    <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
                                </FormControl>
                            </div>       
                        </div>
                    </Box>
                )}
            </div>
        </div>
        
    )
}

export default Sidebar