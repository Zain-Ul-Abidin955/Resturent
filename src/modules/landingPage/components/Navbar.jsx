import { Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import React from 'react'
import { Logo } from '../../../assets';

const Navbar = () => {
    return (
        <Box  display={"flex"} height={"140px"}  sx={{fontFamily:"Poppins,sans-serif"}}  >

            <Box display={"flex"} my={"auto"} width={"15%"}>
              

               <Box
                                  component="img"
                                  src={Logo}
                                  alt="Logo"
                                  sx={{
                                      width: "90px",
                                      height: '35px',
                                  }}/>
              
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



            <Box display={"flex"} gap={2.5} justifyContent={"end"} mr={6} width={"45%"} my={"auto"}>
                <Box mt={1.8} ><SearchIcon fontSize='large' /></Box>
                <Box mt={1.7}><ShoppingBagOutlinedIcon  fontSize='large' /></Box>
                <Box display={"flex"} sx={{ width: "179px", height: "60px", borderRadius: "40px", background: "#39DB4A" }}>
                    <Box m={2} color={"#FFFFFF"}><PhoneInTalkOutlinedIcon /></Box>
                    <Box mt={1.7} fontWeight={"500px"} fontSize={"20px"} color={"#FFFFFF"}>Contact</Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Navbar