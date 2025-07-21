import { Box, Button } from '@mui/material'
import React from 'react'
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import { GirlEating } from '../../../assets';
const Section_1 = () => {
    return (
        <Box  display={"flex"} my={2} border={"2px solid red"}>
            <Box  width={"50%"} my={"auto"}>
                <Box sx={{ fontWeight: "800", fontSize: "62px", color: "#000000", lineHeight: "146%" }}>Dive into Delights <br/>Of Delectable <span style={{ color: "#39DB4A" }}>Food</span></Box>
                <Box sx={{ fontWeight: "500", fontSize: "26px", color: "#4A4A4A", lineHeight: "171%", marginTop: "25px" }}>
                    Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                </Box>

                <Box sx={{ display: "flex" , marginTop:"25px"}}>
                    <Button variant="contained" sx={{
                        background: "#39DB4A",
                        borderRadius: "40px",
                        width: "200px",
                        height: "80px",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontSize: "26px",
                        color: "#FFFFFF",
                        lineHeight: "100%"
                    }}>Order Now</Button>

                    <Box sx={{ display: "flex" }}>
                        <Button sx={{

                            borderRadius: "40px",
                            width: "200px",
                            height: "80px",
                            textTransform: "capitalize",
                            fontWeight: "600",
                            fontSize: "26px",
                            color: "#4D4D4D",
                            lineHeight: "100%"
                        }}>Watch video</Button>
                        <Box sx={{ background: "#FFFFFF", color: "#1E1E1E" }}><PlayCircleRoundedIcon color='#1E1E1E' sx={{ width: "80px", height: "80px" }} /></Box>
                    </Box>
                </Box>
            </Box>
            
                <Box
                    component="img"
                    src={GirlEating}
                    alt="Logo"
                    sx={{
                        width: "830px",
                        height: '810px',
                    }}/>


            
        </Box>
    )
}

export default Section_1