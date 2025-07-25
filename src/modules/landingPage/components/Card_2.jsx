import { Box, Button } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Egg_Salad, Salad, Salad_2 } from '../../../assets';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Card_2 = () => {
  return (

    <Box my={"40px"}>
      <Box sx={{
        fontWeight: "700",
        fontSize: { xs: "12px", md: "20px" },
        lineHeight: "100%",
        letterSpacing: "3px",
        textTransform: "uppercase",
        fontStyle: "bold",
        color: "#FF6868",
      }}>Special Dishes</Box>

      <Box display={'flex'} justifyContent={"space-between"}>

        <Box sx={{
          fontWeight: "700",
          fontSize: { xs: "30px", md: "60px" },

          lineHeight: "132%",
          letterSpacing: "0",
          fontStyle: "bold",
          color: "#000000",
          width: {
            xs:"100%",
            md:"40%",
          },
          my: "10px",

        }}>Standout Dishes From Our Menu</Box>

        <Box sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "end",

        }}>
  
          <Button sx={{
            backgroundColor: "#EFEFEF",
            color: "#6F6E6E",
            borderRadius: "60%",
            width: { xs: "60px", md: "80px", },
            height: { xs: "60px", md: "80px", },
            mr:{ xs:"30px", md:"50px"},
          }}><ArrowBackIosIcon /></Button>
          <Button sx={{
            backgroundColor: "#39DB4A",
            color: "#FFFFFF",
            borderRadius: "60%",
            width: { xs: "60px", md: "80px", },
            height: { xs: "60px", md: "80px", },
          }} ><ArrowForwardIosIcon /></Button>

        </Box>

      </Box>
      {/* card-section */}
      <Box sx={{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: "20px",
        my: '25px',
      }}>

        <Box sx={{

          width: { xs: "350px", md: "446px", },
          height: { xs: "420px", md: "523px", },
          borderRadius: "40px",
          backgroundColor: "#FFFFFF",
          boxShadow: "2px 9px 42px 0px #00000014",
        }}>

          <Box sx={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center",
              width: "87px",
              height: "75px",
              background: "#39DB4A",
              borderTopRightRadius: "37.5px",
              borderBottomLeftRadius: "42.5px",
            }}>
              <FavoriteIcon sx={{
                width: "24px",
                height: "21px",
                color: "#FFFFFF",
              }} />
            </Box>
          </Box>

          <Box sx={{
            textAlign: 'center'
          }}>
            <Box
              component="img"
              src={Salad}
              alt="Logo"
              sx={{
                width: { xs: "200px", md: "276px", },
                height: { xs: "200px", md: "276px", },
              }} />
          </Box>


          <Box sx={{
            ml: "40px",
            my: "10px",

          }}>
            <Box sx={{
              fontWeight: "600",
              fontSize: { xs: "18px", md: "30px" },
              lineHeight: "100%",
              my: "10px",

            }}>
              Fattoush salad
            </Box>

            <Box sx={{
              fontWeight: "600",
              fontSize: { xs: "15px", md: "22px" },
              lineHeight: "100%",
              color: "#555555",
              my: "10px",
            }}>Description of the item</Box>


            <Box sx={{
              display: "flex",
              justifyContent: "space-between"
            }}>

              <Box sx={{
                fontSize: { xs: "18px", md: "30px" },
                fontWeight: "600",
                lineHeight: "100%",
                color: "#000000"
              }}><span className='red'>$</span>24.00</Box>

              <Box sx={{ display: "flex", gap: "10px", mr: "20px" }}>
                <StarIcon sx={{
                  width: "24px",
                  height: "24px",
                  color: "#FFE605",
                }} />
                <Box sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: "600",
                  color: "#454545",
                  mt: "3px",
                }}>4.9</Box>
              </Box>
            </Box>
          </Box>

        </Box>

        <Box sx={{
          width: { xs: "350px", md: "446px", },
          height: { xs: "420px", md: "523px" },
          borderRadius: "40px",
          backgroundColor: "#FFFFFF",
          boxShadow: "2px 9px 42px 0px #00000014",
        }}>

          <Box sx={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center",
              width: "87px",
              height: "75px",
              background: "#39DB4A",
              borderTopRightRadius: "37.5px",
              borderBottomLeftRadius: "42.5px",
            }}>
              <FavoriteBorderIcon sx={{
                width: "24px",
                height: "21px",
                color: "#FFFFFF",
              }} />
            </Box>
          </Box>

          <Box sx={{
            textAlign: 'center'
          }}>
            <Box
              component="img"
              src={Salad_2}
              alt="Logo"
              sx={{
                width: { xs: "200px", md: "276px", },
                height: { xs: "200px", md: "276px", },
              }} />
          </Box>


          <Box sx={{
            ml: "40px",
            my: "10px",

          }}>
            <Box sx={{
              fontWeight: "600",
              fontSize: { xs: "18px", md: "30px" },
              lineHeight: "100%",
              my: "10px",

            }}>
              Vegetable salad
            </Box>

            <Box sx={{
              fontWeight: "600",

              fontSize: { xs: "15px", md: "22px" },
              lineHeight: "100%",
              color: "#555555",
              my: "10px",
            }}>Description of the item</Box>


            <Box sx={{
              display: "flex",
              justifyContent: "space-between"
            }}>

              <Box sx={{
                fontSize: { xs: "18px", md: "30px" },
                fontWeight: "600",
                lineHeight: "100%",
                color: "#000000"
              }}><span className='red'>$</span>26.00</Box>



              <Box sx={{ display: "flex", gap: "10px", mr: "20px" }}>
                <StarIcon sx={{
                  width: "24px",
                  height: "24px",
                  color: "#FFE605",
                }} />
                <Box sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: "600",
                  color: "#454545",
                  mt: "3px",
                }}>4.6</Box>

              </Box>

            </Box>


          </Box>

        </Box>

        <Box sx={{
          width: { xs: "350px", md: "446px", },
          height: { xs: "420px", md: "523px" },
          borderRadius: "40px",
          backgroundColor: "#FFFFFF",
          boxShadow: "2px 9px 42px 0px #00000014",
        }}>

          <Box sx={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center",
              width: "87px",
              height: "75px",
              background: "#39DB4A",
              borderTopRightRadius: "37.5px",
              borderBottomLeftRadius: "42.5px",
            }}>
              <FavoriteBorderIcon sx={{
                width: "24px",
                height: "21px",
                color: "#FFFFFF",
              }} />
            </Box>
          </Box>

          <Box sx={{
            textAlign: 'center'
          }}>
            <Box
              component="img"
              src={Egg_Salad}
              alt="Logo"
              sx={{
                width: { xs: "200px", md: "276px", },
                height: { xs: "200px", md: "276px", },
              }} />
          </Box>


          <Box sx={{
            ml: "40px",
            my: "10px",

          }}>
            <Box sx={{
              fontWeight: "600",
              fontSize: { xs: "18px", md: "30px" },
              lineHeight: "100%",
              my: "10px",

            }}>
              Egg vegi salad
            </Box>

            <Box sx={{
              fontWeight: "600",
              fontSize: { xs: "15px", md: "22px" },
              lineHeight: "100%",
              color: "#555555",
              my: "10px",
            }}>Description of the item</Box>


            <Box sx={{
              display: "flex",
              justifyContent: "space-between"
            }}>

              <Box sx={{
                fontSize: { xs: "18px", md: "30px" },
                fontWeight: "600",
                lineHeight: "100%",
                color: "#000000"
              }}><span className='red'>$</span>23.00</Box>



              <Box sx={{ display: "flex", gap: "10px", mr: "20px" }}>
                <StarIcon sx={{
                  width: "24px",
                  height: "24px",
                  color: "#FFE605",
                }} />
                <Box sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: "600",
                  color: "#454545",
                  mt: "3px",
                }}>4.5</Box>

              </Box>

            </Box>


          </Box>

        </Box>

      </Box>

    </Box>
  )
}

export default Card_2


