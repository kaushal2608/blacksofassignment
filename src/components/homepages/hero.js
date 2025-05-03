import React from 'react'
import { Box, Typography, Container} from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#00000099", // dark gray as in image
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        width: "100%",
        "& element.style": {
          padding: "0px",
        },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body2"
          sx={{
            color: "white",
            mb: 1,
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            fontWeight: "22px",
          }}
        >
          Performance in motion
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            mb: 1,
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Soft Trims and NVH Solutions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          for seamless rides
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
