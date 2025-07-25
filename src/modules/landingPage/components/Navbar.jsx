import { AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import React from 'react'
import { Logo } from '../../../assets';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{
                display: {
                    md: "block",
                    xs: "none",
                },
            }}>

                <Box display={"flex"} height={"140px"} sx={{
                    fontFamily: "Poppins,sans-serif",
                }}>

                    <Box display={"flex"} my={"auto"} width={"15%"}>


                        <Box
                            component="img"
                            src={Logo}
                            alt="Logo"
                            sx={{
                                width: "90px",
                                height: '35px',

                            }} />

                    </Box>

                    <Box display={"flex"} justifyContent={"center"} my={"auto"} width={"40%"}>

                        <Box mr={4} sx={{ fontSize: "20px", fontWeight: "500", color: "#39DB4A" }}>Home</Box>

                        <Box display={"flex"} mr={4}>

                            <Box mr={1} sx={{ fontSize: "20px", fontWeight: "500", color: "#272727" }}>Menu </Box>
                            <Box mt={0.5} color={"#39DB4A"}><ExpandMoreIcon /></Box>
                        </Box>
                        <Box display={"flex"} mr={4}>

                            <Box mr={1} sx={{ fontSize: "20px", fontWeight: "500", color: "#272727" }}>Services</Box>
                            <Box mt={0.5} color={"#39DB4A"}><ExpandMoreIcon /></Box>
                        </Box>
                        <Box sx={{ fontSize: "20px", fontWeight: "500", color: "#272727" }}>offers</Box>
                    </Box>



                    <Box display={"flex"} gap={3} justifyContent={"end"} mr={6} width={"45%"} my={"auto"}>
                        <Box mt={1.8} ><SearchIcon fontSize='large' /></Box>
                        <Box mt={1.7} >
                            <Badge badgeContent={8} sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: "#39DB4A",
                                    color: "white"
                                }
                            }}>

                                <ShoppingBagOutlinedIcon fontSize='large' />

                            </Badge>
                        </Box>
                        <Box display={"flex"} sx={{ width: "179px", height: "60px", borderRadius: "40px", background: "#39DB4A" }}>
                            <Box m={2} color={"#FFFFFF"}><PhoneInTalkOutlinedIcon /></Box>
                            <Box mt={1.7} fontWeight={"500px"} fontSize={"20px"} color={"#FFFFFF"}>Contact</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{
                display: {
                    xs: "block",
                    md: "none",
                },
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    fontFamily: "Poppins,sans-serif",
                    mt: "10px",

                }}>

                    <Box>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose}>Home</MenuItem>
                            <MenuItem onClick={handleClose}>Menu</MenuItem>
                            <MenuItem onClick={handleClose}>Services</MenuItem>
                            <MenuItem onClick={handleClose}>offers</MenuItem>
                        </Menu>
                    </Box>

                    <Box
                        component="img"
                        src={Logo}
                        alt="Logo"
                        sx={{
                            width: "90px",
                            height: '35px',

                        }} />
                </Box>
            </Box>

        </>
    )
}

export default Navbar