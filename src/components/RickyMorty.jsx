import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import img1 from "../Images/rickImage-1.jpeg";
import img2 from "../Images/rickImage-2.jpeg";
import img3 from "../Images/rickImage-3.jpeg";
import img4 from "../Images/rickImage-4.jpeg";
import img5 from "../Images/rickImage-5.jpeg";
import img6 from "../Images/rickImage-6.jpeg";
import CircleIcon from "@mui/icons-material/Circle";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RickyMorty = () => {
  const pages = ["Docs", "About"];
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "system-ui",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              The Rick and Morty API
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "system-ui",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              The Rick and Morty API
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    fontFamily: "system-ui",
                    color: "white",
                    display: "block",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontSize: "1.1rem",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* =========================================================================================================================== */}

      <Box sx={{ bgcolor: "whitesmoke" }}>
        <Container sx={{ padding: "0px 15px" }}>
          <Typography
            sx={{
              fontSize: {
                xs: "3.2rem",
                sm: "3.4rem",
                md: "4rem",
                lg: "5.4rem",
              },
              fontWeight: "800",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              py: { xs: "4rem", sm: "5.5rem", md: "6rem", lg: "6rem" },
            }}
          >
            The Rick and Morty API
          </Typography>
        </Container>
      </Box>

      {/* ============================================================================================================================= */}

      {/* <Box sx={{ bgcolor: "#272B33" }}>
        <Container sx={{ color: "whitesmoke", py: "100px", px: "15px" }}>
          <Grid container spacing={4}>
            <Grid
              size={{ xs: 12, md: 12, lg: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "220px", height: "220px" }}>
                <img
                  src={img1}
                  alt=""
                  style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "rgb(60,62,68)",
                  // width: "100%",
                  // height: "100%",
                  width: "320px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "10px 10px 10px 15px",
                }}
              >
                <Box sx={{ my: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "800",
                      ":hover": { transition: "0.4s", color: "orange" },
                    }}
                  >
                    Amish Cyborg
                  </Typography>
                  <Typography sx={{ fontWeight: "500" }}>
                    <CircleIcon
                      sx={{
                        color: "red",
                        fontSize: "0.7rem",
                        marginRight: "10px",
                      }}
                    />
                    Dead - Alien
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    Last known location :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Earth (Replacement Dimension)
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    First seen in :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Total Rickall
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12, lg: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "220px", height: "220px" }}>
                <img
                  src={img2}
                  alt=""
                  style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "rgb(60,62,68)",
                  // width: "100%",
                  // height: "100%",
                  width: "320px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "10px 10px 10px 15px",
                }}
              >
                <Box sx={{ my: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "800",
                      ":hover": { transition: "0.4s", color: "orange" },
                    }}
                  >
                    E. Coli
                  </Typography>
                  <Typography sx={{ fontWeight: "500" }}>
                    <CircleIcon
                      sx={{
                        color: "red",
                        fontSize: "0.7rem",
                        marginRight: "10px",
                      }}
                    />
                    Dead - Disease
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    Last known location :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Anatomy Park
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    First seen in :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Anatomy Park
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12, lg: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "220px", height: "220px" }}>
                <img
                  src={img3}
                  alt=""
                  style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "rgb(60,62,68)",
                  // width: "100%",
                  // height: "100%",
                  width: "320px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "10px 10px 10px 15px",
                }}
              >
                <Box sx={{ my: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "800",
                      ":hover": { transition: "0.4s", color: "orange" },
                    }}
                  >
                    Chang
                  </Typography>
                  <Typography sx={{ fontWeight: "500" }}>
                    <CircleIcon
                      sx={{
                        color: "greenyellow",
                        fontSize: "0.7rem",
                        marginRight: "10px",
                      }}
                    />
                    Alive - Human
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    Last known location :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    The Menagerie
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    First seen in :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Morty's Mind Blowers
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12, lg: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "220px", height: "220px" }}>
                <img
                  src={img4}
                  alt=""
                  style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "rgb(60,62,68)",
                  // width: "100%",
                  // height: "100%",
                  width: "320px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "10px 10px 10px 15px",
                }}
              >
                <Box sx={{ my: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "800",
                      ":hover": { transition: "0.4s", color: "orange" },
                    }}
                  >
                    Mothership Intern
                  </Typography>
                  <Typography sx={{ fontWeight: "500" }}>
                    <CircleIcon
                      sx={{
                        color: "greenyellow",
                        fontSize: "0.7rem",
                        marginRight: "10px",
                      }}
                    />
                    Alive - Alien
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    Last known location :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Monogatron Mothership
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    First seen in :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    The Old Man and the Seat
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12, lg: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "220px", height: "220px" }}>
                <img
                  src={img5}
                  alt=""
                  style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "rgb(60,62,68)",
                  // width: "100%",
                  // height: "100%",
                  width: "320px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "10px 10px 10px 15px",
                }}
              >
                <Box sx={{ my: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "800",
                      ":hover": { transition: "0.4s", color: "orange" },
                    }}
                  >
                    Glockenspiel Morty
                  </Typography>
                  <Typography sx={{ fontWeight: "500" }}>
                    <CircleIcon
                      sx={{
                        color: "red",
                        fontSize: "0.7rem",
                        marginRight: "10px",
                      }}
                    />
                    Dead - Robot
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    Last known location :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Earth (Replacement Dimension)
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    First seen in :
                  </Typography>
                  <Typography
                    sx={{
                      ":hover": { transition: "0.4s", color: "orange" },
                    }}
                  >
                    Mortyplicity
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 12, lg: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "220px", height: "220px" }}>
                <img
                  src={img6}
                  alt=""
                  style={{
                    // width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  bgcolor: "rgb(60,62,68)",
                  // width: "100%",
                  // height: "100%",
                  width: "320px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  padding: "10px 10px 10px 15px",
                }}
              >
                <Box sx={{ my: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      fontWeight: "800",
                      ":hover": { transition: "0.4s", color: "orange" },
                    }}
                  >
                    Squid Costume Rick
                  </Typography>
                  <Typography sx={{ fontWeight: "500" }}>
                    <CircleIcon
                      sx={{
                        color: "red",
                        fontSize: "0.7rem",
                        marginRight: "10px",
                      }}
                    />
                    Dead - Robot
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    Last known location :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Earth (Replacement Dimension)
                  </Typography>
                </Box>
                <Box sx={{ my: "10px" }}>
                  <Typography sx={{ color: "#978a8aff" }}>
                    First seen in :
                  </Typography>
                  <Typography
                    sx={{ ":hover": { transition: "0.4s", color: "orange" } }}
                  >
                    Mortyplicity
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      {/* ===================================================================================================== */}

      <Box sx={{ bgcolor: "#202329", color: "whitesmoke" }}>
        <Container sx={{ py: "60px", px: "15px" }}>
          <Box
            sx={{
              display: { xs: "block", sm: "flex", md: "flex" },
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                px: "12px",
                fontSize: "14px",
                color: "#9E9E9E",
                fontWeight: "600",
                py: { xs: "7px" },
              }}
            >
              CHARACTERS : 826
            </Typography>
            <Typography
              sx={{
                px: "12px",
                fontSize: "14px",
                color: "#9E9E9E",
                fontWeight: "600",
                py: { xs: "7px" },
              }}
            >
              LOCATIONS : 126
            </Typography>
            <Typography
              sx={{
                px: "12px",
                fontSize: "14px",
                color: "#9E9E9E",
                fontWeight: "600",
                py: { xs: "7px" },
              }}
            >
              EPISODES : 51
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "10px",
            }}
          >
            <Typography
              sx={{
                px: "12px",
                fontSize: "14px",
                color: "#9E9E9E",
                fontWeight: "600",
              }}
            >
              SERVER STATUS{" "}
              <CircleIcon sx={{ color: "greenyellow", fontSize: "0.9rem" }} />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: "30px",
            }}
          >
            <GitHubIcon
              sx={{ mx: "10px", fontSize: "20px", color: "#9E9E9E" }}
            />
            <TwitterIcon
              sx={{ mx: "10px", fontSize: "20px", color: "#9E9E9E" }}
            />
            <FavoriteIcon
              sx={{ mx: "10px", fontSize: "20px", color: "#9E9E9E" }}
            />
          </Box>
          <Box
            sx={{
              color: "#9E9E9E",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ❮❯ by{" "}
            <a
              href="#"
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                color: "whitesmoke",
                textDecoration: "underline red",
                fontWeight: "700",
                ":hover": { color: "red" },
              }}
            >
              Axel Fuhrmann
            </a>{" "}
            2025
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RickyMorty;
