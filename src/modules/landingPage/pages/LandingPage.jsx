import { Box, Container } from '@mui/material'
import Navbar from '../components/Navbar'
import Section_1 from '../components/Section_1'
import CardSection from '../components/CardSection'
import Card_2 from '../components/Card_2'
import Section_2 from '../components/Section_2'
import Section_3 from '../components/Section_3'
import Footer from '../components/Footer'

const Landingpage = () => {
  return (
    <Box>
      <Container maxWidth="xl">

        <Box>
          <Navbar />
          <div className='font'>
            <Section_1 />
            <CardSection />
            <Card_2 />
            <Section_2 />
            <Section_3 />
            <Footer />

          </div>
        </Box>
      </Container>
    </Box>

  )
}

export default Landingpage