import { Box, Button, Container, Autocomplete, TextField } from "@mui/material";
import Image1 from "../Images/Img-1.jpg";
import Layout from "./Layout";
import { Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import image3 from "../Images/Img-3.jpg";
import image4 from "../Images/Img-4.jpg";
import image5 from "../Images/Img-5.jpg";
import image6 from "../Images/Img-6.jpg";
import image7 from "../Images/Img-7.jpg";
import image8 from "../Images/Img-8.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import image9 from "../Images/Img-9.jpg";
import image10 from "../Images/Img-10.jpg";
import image11 from "../Images/Img-11.jpg";
import image22 from "../Images/Img-22.png";
import Slider from "react-slick";
import Avatar from "@mui/material/Avatar";
import image12 from "../Images/Img-12.jpg";
import StarIcon from "@mui/icons-material/Star";
import StarIconHalf from "@mui/icons-material/StarHalf";
import image13 from "../Images/Img-13.jpg";
import image14 from "../Images/Img-14.jpg";
import image15 from "../Images/Img-15.jpg";
import image16 from "../Images/Img-16.jpg";
import image17 from "../Images/Img-17.png";
import image18 from "../Images/Img-18.png";
import image19 from "../Images/Img-19.png";
import image20 from "../Images/Img-20.png";
import image21 from "../Images/Img-21.png";
import image23 from "../Images/Img-23.jpg";
import image24 from "../Images/Img-24.jpg";
import image25 from "../Images/Img-25.jpg";
import image26 from "../Images/Img-26.jpeg";
import imageIcon1 from "../Images/icon-1.png";
import imageIcon2 from "../Images/icon-2.png";
import imageIcon3 from "../Images/icon-3.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Main = () => {
  const top100Films = [
    { label: "America", year: 1994 },
    { label: "London", year: 1972 },
    { label: "Russia", year: 1974 },
  ];
  return (
    <>
      <Layout>
        <Box
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "700px",
            position: "relative",
            "@media (min-width:320px) and (max-width:540px)": {
              height: "500px",
            },
            "@media (min-width:541px) and (max-width:768px)": {
              height: "550px",
            },
            "@media (min-width:769px) and (max-width:1024px)": {
              height: "650px",
            },
          }}
        >
          <img
            src={Image1}
            style={{
              width: "100%",
              height: "100%",
              filter: "brightness(0.6)",
              objectFit: "cover",
            }}
            alt="Tour Image"
          />
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "absolute",
                color: "white",
                top: "5rem",
              }}
            >
              <Box className="mainContent">
                <Box
                  className="mainTitle"
                  sx={{
                    fontSize: "6.5rem",
                    fontFamily: "-apple-system",
                    marginTop: "20px",
                    width: "70%",
                  }}
                >
                  Find Next Place To Visit
                </Box>
                <Box
                  className="mainPara"
                  sx={{
                    marginTop: "20px",
                    fontSize: "1.3rem",
                    "@media (min-width:320px) and (max-width:540px)": {
                      fontSize: "1.2rem",
                      width: "90%",
                    },
                  }}
                >
                  Discover amzaing places at exclusive deals.
                </Box>
                <Box
                  className="mainPara"
                  sx={{
                    marginTop: "10px",
                    fontSize: "1.3rem",
                    "@media (min-width:320px) and (max-width:540px)": {
                      fontSize: "1.2rem",
                      width: "90%",
                    },
                  }}
                >
                  Eat, Shop, Visit interesting places around the world.
                </Box>
                <Button
                  variant="text"
                  sx={{
                    bgcolor: "rgb(0, 100, 250)",
                    color: "white",
                    borderRadius: "7px",
                    padding: "12px 25px",
                    marginTop: "50px",
                    letterSpacing: "1px",
                    fontWeight: "600",
                    fontFamily: "inherit",
                  }}
                  className="btnHover1 mainBtn1"
                >
                  Learn More
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    borderRadius: "7px",
                    padding: "11px 25px",
                    marginTop: "50px",
                    marginLeft: "30px",
                    letterSpacing: "1px",
                    fontWeight: "600",
                    fontFamily: "inherit",
                  }}
                  className="btnHover1 mainBtn2"
                >
                  Search Tour
                </Button>
              </Box>
            </Box>
          </Container>
          {/* <Container
          sx={{
            bgcolor: "white",
            width: "100%",
            height: "180px",
            position: "absolute",
            top: "40rem",
            left: "5rem",
            right: "5rem",
            borderRadius: "15px",
            padding: "20px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginLeft: "20px" }}>
            <label htmlFor="" sx={{ Margin: "50px" }}>
              Keywords
            </label>
            <Autocomplete
              disablePortal
              options={top100Films}
              sx={{ width: 150, marginTop: "15px" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <label htmlFor="" sx={{ Margin: "50px" }}>
              Activity
            </label>
            <Autocomplete
              disablePortal
              options={top100Films}
              sx={{ width: 150, marginTop: "15px" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <label htmlFor="" sx={{ Margin: "50px" }}>
              Destination
            </label>
            <Autocomplete
              disablePortal
              options={top100Films}
              sx={{ width: 150, marginTop: "15px" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <label htmlFor="" sx={{ Margin: "50px" }}>
              Duration
            </label>
            <Autocomplete
              disablePortal
              options={top100Films}
              sx={{ width: 150, marginTop: "15px" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <label htmlFor="" sx={{ Margin: "50px" }}>
              Date
            </label>
            <Autocomplete
              disablePortal
              options={top100Films}
              sx={{ width: 150, marginTop: "15px" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select" />
              )}
            />
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                bgcolor: "rgb(0, 100, 250)",
                color: "white",
                borderRadius: "7px",
                padding: "14px 40px",
                marginTop: "35px",
                marginLeft: "20px",
                letterSpacing: "1px",
                fontFamily: "inherit",
                fontWeight: "600",
                fontSize: "1rem",
              }}
              className="btnHover1"
            >
              Search
            </Button>
          </Box>
        </Container> */}
        </Box>
        <Box sx={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
          <Container>
            <Box
              sx={{
                fontSize: "3.5rem",
                textAlign: "center",
                fontFamily: "-apple-system",
                fontWeight: "600",
                "@media (min-width: 320px) and (max-width: 540px)": {
                  fontSize: "3rem",
                },
              }}
            >
              Top Destinations
            </Box>
            <Box
              sx={{
                fontSize: "1.2rem",
                width: "100",
                marginLeft: "20rem",
                marginRight: "20rem",
                textAlign: "center",
                color: "GrayText",
                paddingTop: "1.5rem",
                "@media (min-width: 320px) and (max-width: 1200px)": {
                  marginLeft: "1.1rem",
                  marginRight: "1.1rem",
                },
              }}
            >
              Explore our top destinations voted by more than 100,000+ customers
              around the world.
            </Box>
            <Box
              sx={{
                textAlign: "center",
                paddingTop: "1.5rem",
                fontWeight: "600",
                color: "black",
                fontSize: "1.1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "capitalize",
                ":hover": {
                  cursor: "pointer",
                  color: "rgb(0, 100, 250)",
                  transition: "0.7s",
                },
              }}
            >
              All Destinations
              <EastIcon
                sx={{
                  fontSize: "20px",
                  paddingLeft: "0.7rem",
                  paddingTop: "0.3rem",
                }}
              />
            </Box>
            {/* <Grid
              container
              spacing={4}
              sx={{
                position: "relative",
                marginTop: "4rem",
                // "@media (min-width: 320px) and (max-width: 1200px)": {}
              }}
            >
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={
                  {
                    // ":hover": {
                    //   cursor: "pointer",
                    //   transition: "0.7s",
                    //   transform: "scale(1.05)",
                    // },
                  }
                }
              >
                <img
                  src={image3}
                  width="100%"
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
                    display: "inline-block",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    left: "16.5rem",
                    top: "1rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  3 Tours
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    overflow: "hidden",
                    top: "5rem",
                    left: "2rem",
                    width: "19rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      fontWeight: "600",
                      color: "white",
                    }}
                  >
                    Westurn Europe
                  </Box>
                  <Box
                    sx={{
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
                      marginTop: "10px",
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
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={
                  {
                    // ":hover": {
                    //   cursor: "pointer",
                    //   transition: "0.7s",
                    //   transform: "scale(1.05)",
                    // },
                  }
                }
              >
                <img
                  src={image4}
                  width="100%"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    display: "inline-block",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    left: "41rem",
                    top: "1.1rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  2 Tours
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    overflow: "hidden",
                    top: "5rem",
                    left: "26.5rem",
                    width: "19rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    South Africa
                  </Box>
                  <Box
                    sx={{
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
                      marginTop: "10px",
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
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={
                  {
                    // ":hover": {
                    //   cursor: "pointer",
                    //   transform: "scale(1.05)",
                    //   transition: "0.7s",
                    // },
                  }
                }
              >
                <img
                  src={image5}
                  width="100%"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    display: "inline-block",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    left: "65.5rem",
                    top: "1.1rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  2 Tours
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    overflow: "hidden",
                    top: "5rem",
                    left: "51rem",
                    width: "19rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Scandinavia
                  </Box>
                  <Box
                    sx={{
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
                      marginTop: "10px",
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
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={
                  {
                    // ":hover": {
                    //   cursor: "pointer",
                    //   transform: "scale(1.05)",
                    //   transition: "0.7s",
                    // },
                  }
                }
              >
                <img
                  src={image6}
                  width="100%"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    display: "inline-block",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    left: "16.5rem",
                    top: "19.3rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  3 Tours
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    overflow: "hidden",
                    top: "23rem",
                    left: "2rem",
                    width: "19rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Egypt
                  </Box>
                  <Box
                    sx={{
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
                      marginTop: "10px",
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
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={
                  {
                    // ":hover": {
                    //   cursor: "pointer",
                    //   transform: "scale(1.05)",
                    //   transition: "0.7s",
                    // },
                  }
                }
              >
                <img
                  src={image7}
                  width="100%"
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    display: "inline-block",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    left: "41rem",
                    top: "19.5rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  5 Tours
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    overflow: "hidden",
                    top: "23rem",
                    left: "26.5rem",
                    width: "19rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Asia
                  </Box>
                  <Box
                    sx={{
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
                      marginTop: "10px",
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
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={
                  {
                    // ":hover": {
                    //   cursor: "pointer",
                    //   transform: "scale(1.05)",
                    //   transition: "0.7s",
                    // },
                  }
                }
              >
                <img
                  src={image8}
                  width="100%"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    filter: "brightness(70%)",
                  }}
                  alt=""
                />
                <Box
                  sx={{
                    bgcolor: "rgb(100, 150, 250)",
                    display: "inline-block",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "5px",
                    color: "white",
                    position: "absolute",
                    left: "65.5rem",
                    top: "19.5rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  4 Tours
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    overflow: "hidden",
                    top: "23rem",
                    left: "51rem",
                    width: "19rem",
                    "@media (min-width: 320px) and (max-width: 1200px)": {
                      display: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "10px",
                      fontSize: "25px",
                      fontFamily: "-apple-system",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    America
                  </Box>
                  <Box
                    sx={{
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
                      marginTop: "10px",
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
            </Grid> */}
            <Grid
              container
              spacing={4}
              sx={{
                paddingTop: "4rem",
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
        <Container sx={{ paddingTop: "2rem", paddingBottom: "0rem" }}>
          <Box>
            <Box
              sx={{
                fontSize: "3.7rem",
                textAlign: "center",
                fontFamily: "-apple-system",
                fontWeight: "600",
                "@media (min-width:320px) and (max-width:768px)": {
                  fontSize: "3rem",
                },
              }}
            >
              Top Tours
            </Box>
            <Box
              sx={{
                fontSize: "1.2rem",
                width: "100",
                marginLeft: "20rem",
                marginRight: "20rem",
                textAlign: "center",
                color: "GrayText",
                paddingTop: "1.5rem",
                "@media (min-width:320px) and (max-width:1024px)": {
                  marginLeft: "1rem",
                  marginRight: "1rem",
                },
              }}
            >
              Explore our top tours voted by more than 100,000+ customers around
              the world.
            </Box>
            <Box
              sx={{
                textAlign: "center",
                paddingTop: "1.5rem",
                paddingBottom: "2rem",
                fontWeight: "600",
                color: "black",
                fontSize: "1.1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "capitalize",
                ":hover": {
                  cursor: "pointer",
                  color: "rgb(0, 100, 250)",
                  transition: "0.7s",
                },
              }}
            >
              All Tours
              <EastIcon
                sx={{
                  fontSize: "20px",
                  paddingLeft: "0.7rem",
                  paddingTop: "0.3rem",
                }}
              />
            </Box>
          </Box>
          <Grid
            container
            spacing={5}
            sx={{
              pt: "2rem",
              pb: "2rem",
            }}
          >
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ width: "100%", borderRadius: "10px" }}>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      ":hover": {
                        transition: "0.7s",
                        cursor: "pointer",
                        transform: "scale(1.05)",
                      },
                    }}
                    component="img"
                    height="auto"
                    image={image9}
                    alt="green iguana"
                  />
                  <CardContent sx={{ padding: "1.5rem" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        fontFamily: "-apple-system",
                        lineHeight: "1.7rem",
                      }}
                    >
                      Two Capitals Tour of 6 days and 5 nights From Moscow
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black" }}>
                      <AccessTimeIcon
                        sx={{
                          fontSize: "1.4rem",
                          paddingTop: "0.7rem",
                          marginTop: "0.7rem",
                          marginBottom: "-0.4rem",
                          color: "rgb(0,100,250)",
                        }}
                      />
                      <Box
                        sx={{
                          display: "inline",
                          color: "GrayText",
                          fontSize: "0.9rem",
                          paddingLeft: "0.7rem",
                        }}
                      >
                        6 Days 5 Nights
                        <Box sx={{ color: "#ffa11a" }}>
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          className="toursPrice"
                          sx={{
                            marginLeft: "13rem",
                            marginTop: "-2.5rem",
                            fontSize: "1.7rem",
                            fontWeight: "700",
                            color: "rgb(0,100,250)",
                            md: { marginLeft: "2rem" },
                          }}
                        >
                          $3,500
                        </Box>
                      </Box>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ width: "100%", borderRadius: "10px" }}>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      ":hover": {
                        transition: "0.7s",
                        cursor: "pointer",
                        transform: "scale(1.05)",
                      },
                    }}
                    component="img"
                    height="auto"
                    image={image10}
                    alt="green iguana"
                  />
                  <CardContent sx={{ padding: "1.5rem" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        fontFamily: "-apple-system",
                        lineHeight: "1.7rem",
                      }}
                    >
                      Turkey Tour : A Cultural & Historical Journey
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black" }}>
                      <AccessTimeIcon
                        sx={{
                          fontSize: "1.4rem",
                          paddingTop: "0.7rem",
                          marginTop: "0.7rem",
                          marginBottom: "-0.4rem",
                          color: "rgb(0,100,250)",
                        }}
                      />
                      <Box
                        sx={{
                          display: "inline",
                          color: "GrayText",
                          fontSize: "0.9rem",
                          paddingLeft: "0.7rem",
                        }}
                      >
                        8 Days 7 Nights
                        <Box sx={{ color: "#ffa11a" }}>
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          className="toursPrice"
                          sx={{
                            marginLeft: "13rem",
                            marginTop: "-2.5rem",
                            fontSize: "1.7rem",
                            fontWeight: "700",
                            color: "rgb(0,100,250)",
                            md: { marginLeft: "2rem" },
                          }}
                        >
                          $5,000
                        </Box>
                      </Box>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    sx={{
                      ":hover": {
                        transition: "0.7s",
                        cursor: "pointer",
                        transform: "scale(1.05)",
                      },
                    }}
                    component="img"
                    height="auto"
                    image={image11}
                    alt="green iguana"
                  />
                  <CardContent sx={{ padding: "1.5rem" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        fontFamily: "-apple-system",
                        lineHeight: "1.7rem",
                      }}
                    >
                      5-Day Oahu Tour: Honolulu and Diamond Head
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black" }}>
                      <AccessTimeIcon
                        sx={{
                          fontSize: "1.4rem",
                          paddingTop: "0.7rem",
                          marginTop: "0.7rem",
                          marginBottom: "-0.4rem",
                          color: "rgb(0,100,250)",
                        }}
                      />
                      <Box
                        sx={{
                          display: "inline",
                          color: "GrayText",
                          fontSize: "0.9rem",
                          paddingLeft: "0.7rem",
                        }}
                      >
                        5 Days 4 Nights
                        <Box sx={{ color: "#ffa11a" }}>
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                          <StarIcon
                            sx={{ fontSize: "1.1rem", paddingTop: "0.5rem" }}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          className="toursPrice"
                          sx={{
                            marginLeft: "13rem",
                            marginTop: "-2.5rem",
                            fontSize: "1.7rem",
                            fontWeight: "700",
                            color: "rgb(0,100,250)",
                          }}
                        >
                          $1,500
                        </Box>
                      </Box>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={0} sx={{ mt: "2rem", mb: "0rem" }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  bgcolor: "rgb(0,100,250)",
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.4rem",
                    paddingTop: "3.9rem",
                    fontWeight: "600",
                  }}
                >
                  Enjoy Summer Deals
                </Typography>
                <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
                  Up To 40% Discount !
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    borderRadius: "7px",
                    padding: "10px 20px",
                    marginTop: "1.7rem",
                    letterSpacing: "1px",
                    fontWeight: "600",
                    fontFamily: "inherit",
                    textAlign: "center",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  className="btnHover1"
                >
                  Search Tour
                </Button>

                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "-apple-system",
                    fontSize: "1.3rem",
                    paddingTop: "1rem",
                  }}
                >
                  Travel Tour
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "0.78rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "3rem",
                  }}
                >
                  *Terms applied
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box sx={{ bgcolor: "rgb(0,100,250)" }}>
                <img
                  src={image22}
                  style={{
                    width: "100%",
                    height: "21.2rem",
                    marginBottom: "-10px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          {/* <Box
          sx={{
            textAlign: "center",
            fontSize: "3.5rem",
            paddingLeft: "15rem",
            paddingRight: "15rem",
            paddingTop: "3rem",
            fontWeight: "600",
            fontFamily: "-apple-system",
            lineHeight: "4rem",
          }}
        >
          What our customers are saying about us
        </Box> */}
          <Box sx={{}}>
            <Box sx={{ pt: "2rem", pb: "2rem" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "3rem",
                  fontWeight: "600",
                  fontFamily: "-apple-system",
                }}
              >
                Travel Articles
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  color: "GrayText",
                  marginTop: "0.7rem",
                }}
              >
                Read All Articless
              </Box>
            </Box>
            <Grid
              container
              spacing={3}
              sx={{
                marginTop: "2rem",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  ":hover": {
                    filter: "brightness(70%)",
                    overflow: "hidden",
                    transform: "scale(1.03)",
                    transition: "0.7s",
                    color: "white",
                  },
                }}
              >
                <img
                  src={image23}
                  alt=""
                  style={{
                    width: "100%",
                    position: "relative",
                  }}
                />
                {/* <Box
                sx={{
                  color: "white",
                  textAlign: "center",
                  position: "absolute",
                  top: "5.7rem",
                  left: "4.3rem",
                }}
              >
                <Box sx={{ fontWeight: "600", color: "white" }}>
                  How to travel with
                </Box>
                <Box sx={{ fontWeight: "600", color: "white" }}>paper map</Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "0.5rem",
                    marginLeft: "-1.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ width: "20px" }} />
                  <Box sx={{ marginLeft: "0.5rem" }}>June 6, 2016</Box>
                </Box>
              </Box> */}
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  ":hover": {
                    filter: "brightness(70%)",
                    overflow: "hidden",
                    transform: "scale(1.03)",
                    transition: "0.7s",
                  },
                }}
              >
                <img
                  src={image24}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
                {/* <Box
                sx={{
                  color: "white",
                  textAlign: "center",
                  position: "absolute",
                  top: "5.7rem",
                  left: "4.3rem",
                }}
              >
                <Box sx={{ fontWeight: "600", color: "white" }}>
                  How to travel with
                </Box>
                <Box sx={{ fontWeight: "600", color: "white" }}>paper map</Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "0.5rem",
                    marginLeft: "-1.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ width: "20px" }} />
                  <Box sx={{ marginLeft: "0.5rem" }}>June 6, 2016</Box>
                </Box>
              </Box> */}
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  ":hover": {
                    filter: "brightness(70%)",
                    overflow: "hidden",
                    transform: "scale(1.03)",
                    transition: "0.7s",
                  },
                }}
              >
                <img
                  src={image25}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
                {/* <Box
                sx={{
                  color: "white",
                  textAlign: "center",
                  position: "absolute",
                  top: "5.7rem",
                  left: "4.3rem",
                }}
              >
                <Box sx={{ fontWeight: "600", color: "white" }}>
                  How to travel with
                </Box>
                <Box sx={{ fontWeight: "600", color: "white" }}>paper map</Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "0.5rem",
                    marginLeft: "-1.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ width: "20px" }} />
                  <Box sx={{ marginLeft: "0.5rem" }}>June 6, 2016</Box>
                </Box>
              </Box> */}
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  ":hover": {
                    filter: "brightness(70%)",
                    overflow: "hidden",
                    transform: "scale(1.03)",
                    transition: "0.7s",
                  },
                }}
              >
                <img
                  src={image26}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
                {/* <Box
                sx={{
                  color: "white",
                  textAlign: "center",
                  position: "absolute",
                  top: "5.7rem",
                  left: "4.3rem",
                }}
              >
                <Box sx={{ fontWeight: "600", color: "white" }}>
                  How to travel with
                </Box>
                <Box sx={{ fontWeight: "600", color: "white" }}>paper map</Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "0.5rem",
                    marginLeft: "-1.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ width: "20px" }} />
                  <Box sx={{ marginLeft: "0.5rem" }}>June 6, 2016</Box>
                </Box>
              </Box> */}
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              paddingTop: "4rem",
              paddingBottom: "2rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "-apple-system",
                fontSize: "3rem",
                fontWeight: "600",
              }}
            >
              We are featured in
            </Typography>
            <Typography
              sx={{
                color: "GrayText",
                fontSize: "1.1rem",
                paddingTop: "0.5rem",
              }}
            >
              See what others are saying about us
            </Typography>
          </Box>
          <Grid
            container
            spacing={5}
            sx={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
              sx={{ width: "10rem" }}
              className="ReviewImage"
            >
              <img
                src={image17}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
              sx={{ width: "10rem" }}
              className="ReviewImage"
            >
              <img
                src={image18}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
              sx={{ width: "10rem" }}
              className="ReviewImage"
            >
              <img
                src={image19}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
              sx={{ width: "10rem" }}
              className="ReviewImage"
            >
              <img
                src={image20}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
              sx={{ width: "10rem" }}
              className="ReviewImage"
            >
              <img
                src={image21}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Main;
