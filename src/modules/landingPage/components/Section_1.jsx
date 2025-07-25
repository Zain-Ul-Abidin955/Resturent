import { Box, Button } from '@mui/material'
import React from 'react'
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import { GirlEating } from '../../../assets';
const Section_1 = () => {
    return (


        <Box sx={{
            display: "flex",
            my: "30px",
            flexDirection: {
                xs: 'column',
                md: 'row',
            },
        }}>

            <Box sx={{
                m: "auto",
                width: "100%"
            }}>
                <Box sx={{ fontWeight: "800", fontSize: { xs: "30px", md: "62px", }, color: "#000000", lineHeight: "146%" }}>
                    Dive into Delights <br /> Of Delectable <span style={{ color: "#39DB4A" }}>Food</span>
                </Box>

                <Box sx={{ fontWeight: "500", fontSize: { xs: "15px", md: "26px" }, color: "#4A4A4A", lineHeight: "171%", marginTop: "25px" }}>
                    Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                </Box>

                <Box sx={{ display: "flex", marginTop: "25px" }}>
                    <Button variant="contained" sx={{
                        background: "#39DB4A",
                        borderRadius: "40px",
                        width: { xs: "100px", md: "200px", },
                        height: { xs: "40px", md: "80px", },
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontSize: { xs: "13px", md: "26px", },
                        color: "#FFFFFF",
                        lineHeight: "100%"
                    }}>Order Now</Button>

                    <Box sx={{ display: "flex" }}>
                        <Button sx={{

                            borderRadius: "40px",
                            width: { xs: "100px", md: "200px", },
                            height: { xs: "40px", md: "80px", },
                            textTransform: "capitalize",
                            fontWeight: "600",
                            fontSize: { xs: "13px", md: "26px", },

                            color: "#4D4D4D",
                            lineHeight: "100%"
                        }}>Watch video</Button>
                        <Box sx={{ background: "#FFFFFF", color: "#1E1E1E" }}><PlayCircleRoundedIcon color='#1E1E1E' sx={{
                            width: { xs: "40px", md: "80px", },
                            height: { xs: "40px", md: "80px", },
                        }} /></Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="img"
                src={GirlEating}
                alt="Logo"
                sx={{

                    width: {
                        xs: "100%",
                        md: "825px"
                    },
                    height: {
                        xs: "auto",
                        md: '810px'
                    },
                }} />
        </Box>


    )
}

export default Section_1