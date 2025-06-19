import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import Section_1 from '../components/Section_1'

const Landingpage = () => {
  return (
    <Box>
      <Box sx={{ width: "90%", margin: "auto" }} >
        <Navbar />
        <div className='font'>
          <Section_1 />

        </div>
      </Box>
    </Box>

  )
}

export default Landingpage