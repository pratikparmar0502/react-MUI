import { Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import image22Page2 from "../Images/Img-22.png";
import image28 from "../Images/Img-28.jpg";
import image29 from "../Images/Img-29.jpg";
import image30 from "../Images/Img-30.jpg";
import image31 from "../Images/Img-31.jpg";
import image32 from "../Images/Img-32.jpg";
import image33 from "../Images/Img-33.jpg";
import image34 from "../Images/Img-34.jpg";
import image35 from "../Images/Img-35.jpg";
import image36 from "../Images/Img-36.jpg";
import Layout from "./Layout";

const Page_2 = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            height: { xs: "28rem", sm: "32rem", md: "35rem", lg: "35rem" },
          }}
        >
          <img
            src={image22Page2}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(70%)",
              // position: "relative",
            }}
          />{" "}
          <Box
            sx={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
            }}
          >
            <Box
              sx={{
                fontSize: {
                  xs: "4rem",
                  sm: "4rem",
                  md: "4.5rem",
                  lg: "5rem",
                },
                fontWeight: "700",
                textAlign: "center",
                fontFamily: "-apple-system",
              }}
            >
              Tours
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "1.5rem",
                },
                fontWeight: "600",
                textAlign: "center",
                pt: "0.7rem",
              }}
            >
              Discover Amazing Place By Tours
            </Box>
          </Box>
        </Box>
        <Box sx={{ py: "2rem" }}>
          <Container>
            <Grid
              container
              spacing={5}
              sx={{
                pt: "2rem",
                pb: "2rem",
              }}
            >
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ width: "100%", borderRadius: "15px" }}>
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
                      image={image28}
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
                        Africa – Amazing African Safari
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
                          5 hours
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $100
                          </Box>
                        </Box>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ width: "100%", borderRadius: "15px" }}>
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
                      image={image29}
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
                        Dubai – All Stunning Places – 8 Hours
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
                          8 Hours
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $1,200
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
                    borderRadius: "15px",
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
                      image={image30}
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
                        Venice, Rome and Milan – 9 Days
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
                          8 Days
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $3,500
                          </Box>
                        </Box>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ width: "100%", borderRadius: "15px" }}>
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
                      image={image31}
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
                        Enquiry Form Only – Paris – 6 Days
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
                          6 Days
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $2,000
                          </Box>
                        </Box>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ width: "100%", borderRadius: "15px" }}>
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
                      image={image32}
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
                        5-Days and 4 Nights Oahu Tour : Honolulu
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
                          5 Days
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $1,500
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
                    borderRadius: "15px",
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
                      image={image33}
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
                        Molokini and Turtle Snorkeling
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
                          4 Hours
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $80
                          </Box>
                        </Box>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ width: "100%", borderRadius: "15px" }}>
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
                      image={image34}
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
                        Two Moscow Tour of 8 Days and 7 Nights
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
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                <Card sx={{ width: "100%", borderRadius: "15px" }}>
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
                      image={image35}
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
                        Pais – Eiffel Tower, Notre Dame Cath..
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
                          10 Hours
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $800
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
                    borderRadius: "15px",
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
                      image={image36}
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
                        Austria – 6 Days in Vienna, Hallstatt
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
                          2 Days 1 Nights
                          <Box sx={{ color: "#ffa11a" }}>
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
                            />
                            <StarIcon
                              sx={{
                                fontSize: "1.1rem",
                                paddingTop: "0.5rem",
                              }}
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
                            $2,100
                          </Box>
                        </Box>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default Page_2;
