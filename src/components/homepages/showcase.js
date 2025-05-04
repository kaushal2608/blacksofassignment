import {
  Box,
  Typography,
  Stack,
  Grid2,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const vehicleTypes = [
  {
    label: "Passenger vehicles",
    desc: "Revving up Nonwoven innovation from interior to exterior.",
    key: "passenger",
  },
  {
    label: "Commercial vehicles",
    desc: "Advancing Nonwoven engineering for heavy-duty vehicles.",
    key: "commercial",
  },
];

const carSections = [
  {
    label: "Complete Body",
    img: "/assets/completebody.png",
    mp4: "/mp4/completebody.mp4",
  },
  { label: "Front", img: "/assets/front.png", mp4: "/mp4/front.mp4" },
  { label: "Cabin", img: "/assets/cabin.png", mp4: "/mp4/cabin.mp4" },
  { label: "Trunk", img: "/assets/trunk.png", mp4: "/mp4/trunk.mp4" },
  { label: "Exterior", img: "/assets/exterior.png", mp4: "/mp4/exterior.mp4" },
];

export default function ShowCase() {
  const [activeVehicle, setActiveVehicle] = useState("passenger");
  const [activeSection, setActiveSection] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 6,
        px: { xs: 2, md: 10 },
      }}
    >
      <Typography variant="h4" fontWeight="light" textAlign="center">
        Evolving the drive with <b>360-degree</b>
        <br /> nonwoven solutions
      </Typography>

      <Grid2 container spacing={4} mt={6} alignItems="center">
        {/* Left Tabs */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Stack spacing={4}>
            {vehicleTypes.map((type) => (
              <Box
                key={type.key}
                onClick={() => {
                  setActiveVehicle(type.key);
                  setActiveSection(0);
                }}
                sx={{
                  borderLeft:
                    activeVehicle === type.key ? "3px solid #fff" : "none",
                  pl: 2,
                  cursor: "pointer",
                  opacity: activeVehicle === type.key ? 1 : 0.4,
                }}
              >
                <Typography fontWeight="bold">{type.label}</Typography>
                <Typography variant="body2">{type.desc}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid2>
        {activeVehicle == "commercial" &&
          (carSections[activeSection].mp4.endsWith(".mp4") ? (
            <Box
      component="video"
      src={"/mp4/truck.mp4"}
      autoPlay
      muted
      playsInline
      sx={{
        width: {
          xs: "100%", // for extra-small and small devices
          md: "50%",  // for medium and up
        },
        height: "auto",
        maxWidth: "100%",
        borderRadius: 2,
      }}
    />
          ) : (
            <Image
              src={carSections[activeSection].img}
              alt={carSections[activeSection].label}
              width={500}
              height={300}
              style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
            />
          ))}
        {activeVehicle == "passenger" &&
  (carSections[activeSection].mp4.endsWith(".mp4") ? (
    <Box
      component="video"
      src={carSections[activeSection].mp4}
      autoPlay
      muted
      playsInline
      sx={{
        width: {
          xs: "100%", // for extra-small and small devices
          md: "50%",  // for medium and up
        },
        height: "auto",
        maxWidth: "100%",
        borderRadius: 2,
      }}
    />
  ) : (
    <Image
      src={carSections[activeSection].img}
      alt={carSections[activeSection].label}
      width={500}
      height={300}
      style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
    />
  ))}


        {/* Bottom Icons */}
        {activeVehicle == "passenger" && (
          <Grid2 size={{ xs: 12, md: 4 }}></Grid2>
        )}
        {activeVehicle == "passenger" && (
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 6 }}
              justifyContent={{ xs: "center", md: "center" }}
              flexWrap="wrap"
              rowGap={2}
            >
              {carSections.map((section, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveSection(index)}
                  sx={{
                    opacity: activeSection === index ? 1 : 0.5,
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={section.img}
                    alt={section.label}
                    width={40}
                    height={40}
                  />
                  <Typography variant="body2" component="p">
                    {section.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
}
