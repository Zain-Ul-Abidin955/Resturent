import { Avatar, AvatarGroup, Box } from '@mui/material'
import React from 'react'
import { boy_1, Girl_1, Girl_2, Happy } from '../../../assets'
import StarIcon from '@mui/icons-material/Star';


const Section_2 = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: 'column-reverse',
                md: 'row',
            },
            gap: "20px",
            my: "30px",
        }}>
            <Box sx={{
                width: {
                    xs: "100%",
                    md: "50%",
                },
                textAlign: "center",

            }}>
                <Box
                    component="img"
                    src={Happy}
                    alt="Logo"
                    sx={{
                        width: {
                            xs: "80%",
                            md: "506px"
                        },
                        height: {
                            xs: "auto",
                            md: '744px'
                        },

                    }} />
            </Box>

            <Box sx={{
                width: {
                    xs: "100%",
                    md: "635px",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                gap: "20px",
            }}>
                <Box sx={{
                    fontWeight: "700",
                    fontSize: { xs: "12px", md: "20px" },
                    lineHeight: "100%",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontStyle: "bold",
                    color: "#FF6868",
                }}>Testimonials</Box>

                <Box sx={{
                    fontWeight: "700",
                    fontSize: { xs: "30px", md: "60px" },
                    lineHeight: "131%",
                    color: "#000000",
                }}>What Our Customers Say About Us</Box>

                <Box sx={{
                    fontWeight: "500",
                    fontSize: { xs: "15px", md: "26px" },
                    lineHeight: "159%",
                    color: "#555555",
                }}>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</Box>

                <Box sx={{
                    display: "flex",
                    gap: "50px",
                    textAlign: "center",
                }}>

                    <Box ml={3}>
                        <AvatarGroup spacing="small">
                            <Avatar alt="Remy Sharp" src={Girl_1} sx={{
                                width: { xs: "60px", md: "80px", },
                                height: { xs: "60px", md: "80px", },
                            }} />
                            <Avatar alt="Remy Sharp" src={boy_1} sx={{
                                width: { xs: "60px", md: "80px", },
                                height: { xs: "60px", md: "80px", },
                            }} />
                            <Avatar alt="Remy Sharp" src={Girl_2} sx={{
                                width: { xs: "60px", md: "80px", },
                                height: { xs: "60px", md: "80px", },
                            }} />

                        </AvatarGroup>
                    </Box>
                    <Box mt={2} sx={{
                        display: {
                            xs: "none",
                            md: "block",
                        },
                    }}>
                        <Box sx={{
                            fontWeight: "600",
                            fontSize: "26px",
                            lineHeight: "100%",
                            color: "#000000",
                            mb: "10px"
                        }}>Customer Feedback</Box>

                        <Box sx={{
                            display: "flex"
                        }}>
                            <StarIcon sx={{
                                width: "24px",
                                height: "24px",
                                color: "#FFE605",
                                mr: "3px",
                            }} />

                            <Box sx={{
                                fontWeight: "600",
                                fontSize: "24px",
                                lineHeight: "100%",
                                color: "#454545",
                                mr: "10px",
                            }}>4.9</Box>

                            <Box sx={{
                                fontWeight: "500",
                                fontSize: "24px",
                                lineHeight: "100%",
                                color: "#807E7E",
                            }}>(18.6k Reviews)</Box>
                        </Box>
                    </Box>


                </Box>
            </Box>

        </Box>
    )
}

export default Section_2