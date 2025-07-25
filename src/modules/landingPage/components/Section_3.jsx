import { Box, Button } from '@mui/material'
import React from 'react'
import { Boal, Gift, Shopping, Time } from '../../../assets'

const Section_3 = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            gap: "20px",
            my: "30px",
        }}>


            <Box sx={{
                width: {
                    xs: "100%",
                    md: "50%",
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
                }}>Our Story & Services</Box>

                <Box sx={{
                    fontWeight: "700",
                    fontSize: { xs: "30px", md: "60px" },

                    lineHeight: "131%",
                    color: "#000000",
                }}>Our Culinary Journey And Services</Box>

                <Box sx={{
                    fontWeight: "500",
                    fontSize: { xs: "15px", md: "26px" },
                    lineHeight: "159%",
                    color: "#555555",
                }}>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</Box>

                <Button sx={{

                    borderRadius: "40px",
                    width: { xs: "100px", md: "200px", },
                    height: { xs: "40px", md: "80px", },
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: { xs: "13px", md: "26px", },
                    color: "#FFFFFF",
                    lineHeight: "100%",
                    backgroundColor: "#39DB4A"
                }}>Explore</Button>

            </Box>

            <Box sx={{
                width: {
                    xs: "100%",
                    md: "50%",
                },
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "40px"
            }}>

                <Box
                    sx={{
                        width: '277px',
                        height: "297px",
                        width: { xs: "200px", md: "277px", },
                        height: { xs: "220px", md: "297px", },
                        borderRadius: "40px",
                        bgcolor: "#FFFFFF",
                        textAlign: 'center',
                        boxShadow: "2px 10px 30px 0px #0000001A",
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Box
                        component="img"
                        src={Boal}
                        alt="Logo"
                        sx={{
                            width: { xs: "45px", md: "64px", },
                            height: { xs: "45px", md: "64px", },
                        }} />

                    <Box my={2} sx={{
                        fontWeight: "700",
                        fontSize: { xs: "14px", md: "24px", },
                        lineHeight: "100%",
                        textTransform: "uppercase",
                        color: "#5FE26C"
                    }}>Catering</Box>

                    <Box my={2} sx={{
                        fontWeight: "600",
                        fontSize: { xs: "12px", md: "20px", },
                        lineHeight: "100%",
                        color: "#90BD95",
                        width: "80%",
                    }}>Delight your guests with our flavors and presentation</Box>

                </Box>

                <Box
                    sx={{
                        width: { xs: "200px", md: "277px", },
                        height: { xs: "220px", md: "297px", },
                        borderRadius: "40px",
                        bgcolor: "#FFFFFF",
                        textAlign: 'center',
                        boxShadow: "2px 10px 30px 0px #0000001A",
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Box
                        component="img"
                        src={Time}
                        alt="Logo"
                        sx={{
                            width: { xs: "45px", md: "64px", },
                            height: { xs: "45px", md: "64px", },
                        }} />

                    <Box my={2} sx={{
                        fontWeight: "700",
                        fontSize: { xs: "14px", md: "24px", },

                        lineHeight: "100%",
                        textTransform: "uppercase",
                        color: "#5FE26C"
                    }}>Fast delivery</Box>

                    <Box my={2} sx={{
                        fontWeight: "600",
                        fontSize: { xs: "12px", md: "20px", },
                        lineHeight: "100%",
                        color: "#90BD95",
                        width: "80%",
                    }}>We deliver your order promptly to your door</Box>

                </Box>


                <Box
                    sx={{
                        width: { xs: "200px", md: "277px", },
                        height: { xs: "220px", md: "297px", },
                        borderRadius: "40px",
                        bgcolor: "#FFFFFF",
                        textAlign: 'center',
                        boxShadow: "2px 10px 30px 0px #0000001A",
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Box
                        component="img"
                        src={Shopping}
                        alt="Logo"
                        sx={{
                            width: { xs: "45px", md: "64px", },
                            height: { xs: "45px", md: "64px", },
                        }} />

                    <Box my={2} sx={{
                        fontWeight: "700",
                        fontSize: { xs: "14px", md: "24px", },
                        lineHeight: "100%",
                        textTransform: "uppercase",
                        color: "#5FE26C"
                    }}>Online Ordering</Box>

                    <Box my={2} sx={{
                        fontWeight: "600",
                        fontSize: { xs: "12px", md: "20px", },
                        lineHeight: "100%",
                        color: "#90BD95",
                        width: "80%",
                    }}>Explore menu & order with ease using our Online Ordering</Box>

                </Box>


                <Box
                    sx={{
                        width: { xs: "200px", md: "277px", },
                        height: { xs: "220px", md: "297px", },
                        borderRadius: "40px",
                        bgcolor: "#FFFFFF",
                        textAlign: 'center',
                        boxShadow: "2px 10px 30px 0px #0000001A",
                        display: "flex",
                        flexFlow: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Box
                        component="img"
                        src={Gift}
                        alt="Logo"
                        sx={{
                            width: { xs: "45px", md: "64px", },
                            height: { xs: "45px", md: "64px", },
                        }} />

                    <Box my={2} sx={{
                        fontWeight: "700",
                        fontSize: { xs: "14px", md: "24px", },
                        lineHeight: "100%",
                        textTransform: "uppercase",
                        color: "#5FE26C"
                    }}>Gift Cards</Box>

                    <Box my={2} sx={{
                        fontWeight: "600",
                        fontSize: { xs: "12px", md: "20px", },
                        lineHeight: "100%",
                        color: "#90BD95",
                        width: "80%",
                    }}>Give the gift of exceptional dining with Foodi Gift Cards</Box>

                </Box>

            </Box>
        </Box>

    )
}

export default Section_3