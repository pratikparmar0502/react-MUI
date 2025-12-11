import image10Page2 from "../Images/Img-10.jpg";
import { Box, Button, Container, Grid } from "@mui/material";
// import EastIcon from "@mui/icons-material/East";
import image3 from "../Images/Img-3.jpg";
import image4 from "../Images/Img-4.jpg";
import image5 from "../Images/Img-5.jpg";
import image6 from "../Images/Img-6.jpg";
import image7 from "../Images/Img-7.jpg";
import image8 from "../Images/Img-8.jpg";
import Layout from "./Layout";
const Destinations = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            width: "100%",
            pb: "2rem",
            bgcolor: "whitesmoke",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              width: "100%",
              height: { xs: "25rem", md: "35rem" },
              position: "relative",
              mb: "4rem",
            }}
          >
            <img
              src={image10Page2}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(70%)",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "translate(-50%, -50%)",
              color: "white",
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
                fontWeight: "700",
                textAlign: "center",
                fontFamily: "-apple-system",
              }}
            >
              Destinations
            </Box>
            <Box
              sx={{
                fontSize: { xs: "1rem", sm: "1.3rem" },
                fontWeight: "600",
                textAlign: "center",
                pt: "0.7rem",
              }}
            >
              Explore Tours By Destinations
            </Box>
          </Box>
          <Container sx={{}}>
            <Grid
              container
              spacing={4}
              sx={{
                marginTop: "2rem",
                borderRadius: "10px",
                // overflow: "hidden",
              }}
            >
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                sx={{
                  position: "relative",
                  height: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  ":hover": {
                    cursor: "pointer",
                    transition: "0.7s",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={image3}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(70%)",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    padding: "5px 15px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    zIndex: "10",
                  }}
                >
                  3 Tours
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "left",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    color: "white",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      textAlign: "center",
                      fontFamily: "-apple-system",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Westurn Europe
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      marginBottom: "10px",
                      color: "white",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </Box>
                  <Button
                    sx={{
                      color: "rgb(100,150,250)",
                      borderColor: "white",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      display: "block",
                      margin: "10px auto",
                      fontSize: "1.1rem",
                      ":hover": {
                        color: "white",
                        transition: "0.5s",
                      },
                    }}
                  >
                    View all Tours
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                sx={{
                  position: "relative",
                  height: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  ":hover": {
                    cursor: "pointer",
                    transition: "0.7s",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={image4}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(70%)",
                    borderRadius: "15px",
                  }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    padding: "5px 15px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    zIndex: "10",
                  }}
                >
                  2 Tours
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "left",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    color: "white",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      fontWeight: "600",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    South Africa
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      marginBottom: "10px",
                      color: "white",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </Box>
                  <Button
                    sx={{
                      color: "rgb(100,150,250)",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      display: "block",
                      margin: "10px auto",
                      fontSize: "1.1rem",
                      ":hover": {
                        color: "white",
                        transition: "0.5s",
                      },
                    }}
                  >
                    View all Tours
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                sx={{
                  position: "relative",
                  height: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  ":hover": {
                    cursor: "pointer",
                    transition: "0.7s",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={image5}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(80%)",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    padding: "5px 15px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    zIndex: "10",
                  }}
                >
                  2 Tours
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "left",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    color: "white",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      fontWeight: "600",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Scandinavia
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      marginBottom: "10px",
                      color: "white",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </Box>
                  <Button
                    sx={{
                      color: "rgb(100,150,250)",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      display: "block",
                      margin: "10px auto",
                      fontSize: "1.1rem",
                      ":hover": {
                        color: "white",
                        transition: "0.5s",
                      },
                    }}
                  >
                    View all Tours
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                sx={{
                  position: "relative",
                  height: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  ":hover": {
                    cursor: "pointer",
                    transition: "0.7s",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={image6}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(80%)",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    padding: "5px 15px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    zIndex: "10",
                  }}
                >
                  3 Tours
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "left",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    color: "white",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      textAlign: "center",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Egypt
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "10px",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </Box>
                  <Button
                    sx={{
                      color: "rgb(100,150,250)",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                      display: "block",
                      margin: "10px auto",
                      marginLeft: "25%",
                      ":hover": {
                        color: "white",
                        transition: "0.5s",
                      },
                    }}
                  >
                    View all Tours
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                sx={{
                  position: "relative",
                  height: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  ":hover": {
                    cursor: "pointer",
                    transition: "0.7s",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={image7}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(80%)",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    padding: "5px 15px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    zIndex: "10",
                  }}
                >
                  5 Tours
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "left",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    color: "white",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      fontWeight: "600",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Asia
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "10px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </Box>
                  <Button
                    sx={{
                      color: "rgb(100,150,250)",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      display: "block",
                      margin: "10px auto",
                      fontSize: "1.1rem",
                      ":hover": {
                        color: "white",
                        transition: "0.5s",
                      },
                    }}
                  >
                    View all Tours
                  </Button>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                sx={{
                  position: "relative",
                  height: "300px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  ":hover": {
                    cursor: "pointer",
                    transition: "0.7s",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={image8}
                  width="100%"
                  height="100%"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(80%)",
                    borderRadius: "10px",
                  }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    padding: "5px 15px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    zIndex: "10",
                  }}
                >
                  4 Tours
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "left",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    padding: "20px",
                    color: "white",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      fontWeight: "600",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    America
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "10px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </Box>
                  <Button
                    sx={{
                      color: "rgb(100,150,250)",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      display: "block",
                      margin: "10px auto",
                      fontSize: "1.1rem",
                      ":hover": {
                        color: "white",
                        transition: "0.5s",
                      },
                    }}
                  >
                    View all Tours
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default Destinations;
