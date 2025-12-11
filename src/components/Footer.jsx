import { Box, Container, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import image27 from "../Images/Img-27.png";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#292727ff",
          color: "whitesmoke",
          marginTop: "2rem",
        }}
      >
        <Container sx={{ padding: "60px 15px" }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box sx={{ pl: "1rem" }}>
                <Box
                  sx={{
                    color: "rgb(0,100,250)",
                    fontWeight: "600",
                    fontSize: "22px",
                  }}
                >
                  Call Us
                </Box>
                <CallIcon
                  sx={{
                    width: "25px",
                    marginTop: "12px",
                  }}
                />
                <Box
                  sx={{
                    display: "inline",
                    ml: "10px",
                    fontSize: "18px",
                  }}
                >
                  +6-345-3456-233
                </Box>
                <Box
                  sx={{
                    color: "rgb(0,100,250)",
                    fontWeight: "600",
                    fontSize: "22px",
                    marginTop: "20px",
                  }}
                >
                  Email
                </Box>
                <Box
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    marginTop: "10px",
                  }}
                >
                  Ask@traveltourtheme.com
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box sx={{ pl: "1rem" }}>
                <Box
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    paddingBottom: "18px",
                  }}
                >
                  About Us
                </Box>
                <Box
                  sx={{
                    paddingBottom: "10px",
                    fontSize: "16px",
                    color: "#e1ceceff",
                    ":hover": {
                      transition: "0.7s",
                      color: "rgb(0,100,250)",
                    },
                  }}
                >
                  Our Story
                </Box>
                <Box
                  sx={{
                    paddingBottom: "10px",
                    fontSize: "16px",
                    color: "#e1ceceff",
                    ":hover": {
                      transition: "0.7s",
                      color: "rgb(0,100,250)",
                    },
                  }}
                >
                  Travel Blog & Tips
                </Box>
                <Box
                  sx={{
                    paddingBottom: "10px",
                    fontSize: "16px",
                    color: "#e1ceceff",
                    ":hover": {
                      transition: "0.7s",
                      color: "rgb(0,100,250)",
                    },
                  }}
                >
                  Working With Us
                </Box>
                <Box
                  sx={{
                    paddingBottom: "10px",
                    fontSize: "16px",
                    color: "#e1ceceff",
                    ":hover": {
                      transition: "0.7s",
                      color: "rgb(0,100,250)",
                    },
                  }}
                >
                  Be Our Partner
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box sx={{ pl: "1rem" }}>
                <Box
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    paddingBottom: "20px",
                  }}
                >
                  Support
                </Box>
                <Box
                  sx={{
                    paddingBottom: "10px",
                    fontSize: "16px",
                    color: "#e1ceceff",
                    ":hover": {
                      transition: "0.7s",
                      color: "rgb(0,100,250)",
                    },
                  }}
                >
                  Customer Support
                </Box>
                <Box
                  sx={{
                    paddingBottom: "10px",
                    fontSize: "16px",
                    color: "#e1ceceff",
                    ":hover": {
                      transition: "0.7s",
                      color: "rgb(0,100,250)",
                    },
                  }}
                >
                  Privayc Policy
                </Box>
                <Box
                  sx={{
                    paddingBottom: "10px",
                    fontSize: "16px",
                    color: "#e1ceceff",
                    ":hover": {
                      transition: "0.7s",
                      color: "rgb(0,100,250)",
                    },
                  }}
                >
                  Contact Channels
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
              <Box sx={{ pl: "1rem" }}>
                <Box
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    paddingBottom: "20px",
                  }}
                >
                  Pay Safely With Us
                </Box>
                <Box>
                  The payment is encrypted and transmitted securely with an SSL
                  protocol.
                </Box>
                <img
                  src={image27}
                  style={{ paddingTop: "10px", width: "100%" }}
                  alt="Credit Card Image"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#171717ff" }}>
        <Container
          sx={{
            height: { xs: "7rem", sm: "6rem" },
            width: "100%",
            padding: "35px 15px",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid
              sx={{
                textAlign: { xs: "center", sm: "left", md: "left" },
                order: { xs: 2, sm: 1 },
              }}
              size={{ xs: 12, sm: 6, md: 6 }}
            >
              <Box
                sx={{
                  color: "#bab4b4ff",
                  fontWeight: "600",
                }}
              >
                © 2025 Travel Tour All Rights Reserved.
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 6,
              }}
              sx={{
                order: { xs: 1, sm: 2 },
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: { xs: "center", sm: "flex-end" },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  color: "#bab4b4",
                  fontWeight: 600,
                  marginRight: "1.5rem",
                }}
              >
                Follow Us On
              </Box>
              <Box
                sx={{
                  gap: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FacebookIcon
                  sx={{
                    color: "white",
                    fontSize: "1.3rem ",
                  }}
                />
                <LinkedInIcon sx={{ color: "white", fontSize: "1.3rem " }} />
                <TwitterIcon sx={{ color: "white", fontSize: "1.3rem " }} />
                <InstagramIcon sx={{ color: "white", fontSize: "1.3rem " }} />
                <PinterestIcon sx={{ color: "white", fontSize: "1.3rem " }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
