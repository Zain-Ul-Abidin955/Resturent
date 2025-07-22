import { Box } from '@mui/material'
import React from 'react'
import { Logo } from '../../../assets'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: "space-between",
                height: "80vh",
                // border: "2px solid red"
            }}>

                <Box sx={{
                    width: "25%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}>
                    <Box>
                        <Box
                            component="img"
                            src={Logo}
                            alt="Logo"
                            sx={{
                                width: "90px",
                                height: '35px',
                            }} />

                    </Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "151%",
                        color: "#555555"
                    }}>Savor the artistry where <br /> every dish is a culinary<br /> masterpiece</Box>
                </Box>

                <Box sx={{
                    width: "25%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}>
                    <Box sx={{
                        fontWeight: "600",
                        fontSize: "26px",
                        lineHeight: "100%",
                        color: "#000000"
                    }}>Useful links</Box>

                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>About Us</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>Events</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>Blog</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>FAQ</Box>
                </Box>

                <Box sx={{
                    width: "25%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}>
                    <Box sx={{
                        fontWeight: "600",
                        fontSize: "26px",
                        lineHeight: "100%",
                        color: "#000000"
                    }}>Main Menu</Box>

                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>Home</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>Offers</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>Menus</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>Resarvation</Box>
                </Box>

                <Box sx={{
                    width: "25%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}>
                    <Box sx={{
                        fontWeight: "600",
                        fontSize: "26px",
                        lineHeight: "100%",
                        color: "#000000"
                    }}>Conatact Us</Box>

                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>example@mail.com</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>+92 305979567</Box>
                    <Box sx={{
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "100%",
                        color: "#555555"
                    }}>Social media</Box>

                </Box>

            </Box>


            <Box sx={{
                display: "flex",

            }}>
                <Box sx={{
                    width: "25%",
                    display: "flex",
                    gap: "16px"
                }}>

                  <Box sx={{
                        width: "57px",
                        height: "58px",
                        backgroundColor: "#39DB4A",
                        borderRadius: "100%",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:"center",

                    }}>
                        <FacebookOutlinedIcon sx={{
                            color: "#FFFFFF",
                        }} />
                    </Box>
                  
                    <Box sx={{
                        width: "57px",
                        height: "58px",
                        backgroundColor: "#e7e7e7ff",
                        borderRadius: "100%",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:"center",

                    }}>
                        <InstagramIcon sx={{
                            color: "#484848",
                        }} />
                    </Box>

                         <Box sx={{
                        width: "57px",
                        height: "58px",
                        backgroundColor: "#e7e7e7ff",
                        borderRadius: "100%",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:"center",

                    }}>
                        <TwitterIcon sx={{
                            color: "#484848",
                        }} />
                    </Box>

                         <Box sx={{
                        width: "57px",
                        height: "58px",
                        backgroundColor: "#e7e7e7ff",
                        borderRadius: "100%",
                        display:"flex",
                        justifyContent:'center',
                        alignItems:"center",

                    }}>
                        <YouTubeIcon sx={{
                            color: "#484848",
                        }} />
                    </Box>

                    
                </Box>

                <Box sx={{
                    fontWeight: "500",
                    fontSize: "22px",
                    lineHeight: "100%",
                    color: "#555555",
                    mt:"16px"
                }}>Copyright 2023 Dscode | All rights reserved</Box>
            </Box>
        </>


    )
}

export default Footer