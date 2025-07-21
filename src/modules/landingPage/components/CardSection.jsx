import { Box } from '@mui/material'
import React from 'react'
import { Burger, Ice_cream, Juice, Pizza } from '../../../assets'

const CardSection = () => {
  return (
    <Box border={"2px solid red"} my={6}>
      <Box my={2} sx={{ textTransform: "uppercase", fontWeight: "700", fontSize: "20px", lineHeight: "100%", letterSpacing: "5px", color: "#FF6868", textAlign: "center" }}
      >Customer Favorites</Box>
      <Box my={2} sx={{ fontWeight: "700", fontSize: "60px", lineHeight: "100%", color: "#000000", textAlign: "center" }}
      >Popular Catagories</Box>
      <Box>


        <Box border={"2px solid yellow"} sx={{
          display:"flex",
          justifyContent:"space-between",
          mt:4
        }}>

          <Box 
          sx={{
            width: '326px',
            height: "326px",
            borderRadius: "40px",
            bgcolor: "#FFFFFF",
            textAlign: 'center',
            boxShadow: "2px 10px 30px 0px #0000001A",
            display:"flex",
            flexFlow:"column",
            alignItems:"center",
            justifyContent:"center"
          }}>
              <Box
                component="img"
                src={Burger}
                alt="Logo"
                sx={{
                  width: "153px",
                  height: '153px',
                }} />

            <Box my={2} sx={{ fontWeight: "600", fontSize: "30px", lineHeight: "100%", color: "#1E1E1E" }}
            >Main Dish</Box>

            <Box my={2} sx={{ fontWeight: "500", fontSize: "22px", lineHeight: "100%", color: "#555555" }}
            >(86 dushes)</Box>

          </Box>

          <Box 
          sx={{
            width: '326px',
            height: "326px",
            borderRadius: "40px",
            bgcolor: "#FFFFFF",
            textAlign: 'center',
            boxShadow: "2px 10px 30px 0px #0000001A",
            display:"flex",
            flexFlow:"column",
            alignItems:"center",
            justifyContent:"center"
          }}>
              <Box
                component="img"
                src={Pizza}
                alt="Logo"
                sx={{
                  width: "153px",
                  height: '153px',
                }} />

            <Box my={2} sx={{ fontWeight: "600", fontSize: "30px", lineHeight: "100%", color: "#1E1E1E" }}
            >Break Fast</Box>

            <Box my={2} sx={{ fontWeight: "500", fontSize: "22px", lineHeight: "100%", color: "#555555" }}
            >(12 break fast)</Box>

          </Box>

          <Box 
          sx={{
            width: '326px',
            height: "326px",
            borderRadius: "40px",
            bgcolor: "#FFFFFF",
            textAlign: 'center',
            boxShadow: "2px 10px 30px 0px #0000001A",
            display:"flex",
            flexFlow:"column",
            alignItems:"center",
            justifyContent:"center"
          }}>
              <Box
                component="img"
                src={Ice_cream}
                alt="Logo"
                sx={{
                  width: "153px",
                  height: '153px',
                }} />

            <Box my={2} sx={{ fontWeight: "600", fontSize: "30px", lineHeight: "100%", color: "#1E1E1E" }}
            >Dessert</Box>

            <Box my={2} sx={{ fontWeight: "500", fontSize: "22px", lineHeight: "100%", color: "#555555" }}
            >(48 dessert)</Box>

          </Box>

          <Box 
          sx={{
            width: '326px',
            height: "326px",
            borderRadius: "40px",
            bgcolor: "#FFFFFF",
            textAlign: 'center',
            boxShadow: "2px 10px 30px 0px #0000001A",
            display:"flex",
            flexFlow:"column",
            alignItems:"center",
            justifyContent:"center"
          }}>
              <Box
                component="img"
                src={Juice}
                alt="Logo"
                sx={{
                  width: "153px",
                  height: '153px',
                }} />

            <Box my={2} sx={{ fontWeight: "600", fontSize: "30px", lineHeight: "100%", color: "#1E1E1E" }}
            >Browse All</Box>

            <Box my={2} sx={{ fontWeight: "500", fontSize: "22px", lineHeight: "100%", color: "#555555" }}
            >(255 items)</Box>

          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default CardSection