import React from 'react'
import { Box, Typography, Grid2, TextField, Button} from '@mui/material';

const Contact = () => {
  return (
    <div id='contact'>
      <Box
      sx={{
        backgroundColor: '#0067B1', // blue background
        color: '#fff',
        // my: { xs: 6, md: 10 },
        // px: { xs: 3, md: 10 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingBottom:"10px"
      }}
    >
      <Grid2 container spacing={5} alignItems="center" sx={{px: { xs: 10, md: 20 }}}>
        {/* Left Side: Contact Info */}
        <Grid2  size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{mt: { xs: 4 }}}>
            Get in touch
          </Typography>
          <Box
            sx={{
              width: 50,
              height: 3,
              backgroundColor: '#fff',
              mb: 2,
            }}
          />
          <Typography variant="body1" sx={{ mb: 3 }}>
            For general enquiries
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography fontWeight="bold">Address :</Typography>
            <Typography>110, 16th Road, Chembur, Mumbai – 400071</Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography fontWeight="bold">Phone :</Typography>
            <Typography>+91 22 25208822</Typography>
          </Box>

          <Box>
            <Typography fontWeight="bold">Email :</Typography>
            <Typography>info@supremegroup.co.in</Typography>
          </Box>
        </Grid2>

        {/* Right Side: Form */}
        <Grid2  size={{ xs: 12, md: 6 }}>
          <Grid2 container spacing={2}>
            <Grid2  size={{ xs: 12}}>
              <TextField
                fullWidth
                variant="standard"
                label="Full name"
                InputLabelProps={{ sx: { color: '#fff' } }}
                InputProps={{ sx: { color: '#fff', borderBottom: '1px solid #fff' } }}
              />
            </Grid2>
            <Grid2  size={{ xs: 12}}>
              <TextField
                fullWidth
                variant="standard"
                label="E-mail"
                InputLabelProps={{ sx: { color: '#fff' } }}
                InputProps={{ sx: { color: '#fff', borderBottom: '1px solid #fff' } }}
              />
            </Grid2>
            <Grid2  size={{ xs:12}}>
              <TextField
                fullWidth
                variant="standard"
                label="Subject"
                InputLabelProps={{ sx: { color: '#fff' } }}
                InputProps={{ sx: { color: '#fff', borderBottom: '1px solid #fff' } }}
              />
            </Grid2>
            <Grid2  size={{ xs: 12}}>
              <TextField
                fullWidth
                variant="standard"
                label="Message"
                multiline
                InputLabelProps={{ sx: { color: '#fff' } }}
                InputProps={{ sx: { color: '#fff', borderBottom: '1px solid #fff' } }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12}}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#0066B2',
                  borderRadius: 50,
                  textTransform: 'none',
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                }}
              >
                Send
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
    </div>
  )
}

export default Contact
