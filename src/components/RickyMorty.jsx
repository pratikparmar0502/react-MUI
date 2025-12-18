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

const characters = [
  {
    id: 1,
    name: "Amish Cyborg",
    status: "Dead",
    species: "Alien",
    loc: "Earth",
    seen: "Total Rickall",
    img: img1,
    color: "red",
  },
  {
    id: 2,
    name: "E. Coli",
    status: "Dead",
    species: "Disease",
    loc: "Anatomy Park",
    seen: "Anatomy Park",
    img: img2,
    color: "red",
  },
  {
    id: 3,
    name: "Chang",
    status: "Alive",
    species: "Human",
    loc: "The Menagerie",
    seen: "Morty's Mind Blowers",
    img: img3,
    color: "greenyellow",
  },
  {
    id: 4,
    name: "Mothership Intern",
    status: "Alive",
    species: "Alien",
    loc: "Monogatron",
    seen: "The Old Man and the Seat",
    img: img4,
    color: "greenyellow",
  },
  {
    id: 5,
    name: "Glockenspiel Morty",
    status: "Dead",
    species: "Robot",
    loc: "Earth",
    seen: "Mortyplicity",
    img: img5,
    color: "red",
  },
  {
    id: 6,
    name: "Squid Costume Rick",
    status: "Dead",
    species: "Robot",
    loc: "Earth",
    seen: "Mortyplicity",
    img: img6,
    color: "red",
  },
];

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
      <Box>
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
                  fontWeight: 800,
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
                      <Typography sx={{ textAlign: "center" }}>
                        {page}
                      </Typography>
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
                  fontWeight: 800,
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

        <Box sx={{ bgcolor: "#272B33", minHeight: "100vh" }}>
          <Container sx={{ color: "whitesmoke", py: 8, px: 2 }}>
            <Grid container spacing={4}>
              {characters.map((char) => (
                <Grid key={char.id} size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      bgcolor: "rgb(60,62,68)",
                      borderRadius: "10px",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{ width: { xs: "100%", sm: "40%" }, flexShrink: 0 }}
                    >
                      <img
                        src={char.img}
                        alt={char.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            transition: "0.3s",
                            "&:hover": { color: "orange", cursor: "pointer" },
                          }}
                        >
                          {char.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.9rem",
                          }}
                        >
                          <CircleIcon
                            sx={{
                              color: char.color,
                              fontSize: "0.7rem",
                              mr: 1,
                            }}
                          />
                          {char.status} - {char.species}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "grey.500",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                          }}
                        >
                          Last known location:
                        </Typography>
                        <Typography
                          sx={{
                            "&:hover": { color: "orange", cursor: "pointer" },
                            transition: "0.2s",
                          }}
                        >
                          {char.loc}
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "grey.500",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                          }}
                        >
                          First seen in:
                        </Typography>
                        <Typography
                          sx={{
                            "&:hover": { color: "orange", cursor: "pointer" },
                            transition: "0.2s",
                          }}
                        >
                          {char.seen}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

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
                sx={{
                  mx: "10px",
                  fontSize: "20px",
                  color: "#9E9E9E",
                  ":hover": {
                    color: "orange",
                    cursor: "pointer",
                    transition: "0.5s",
                  },
                }}
              />
              <TwitterIcon
                sx={{
                  mx: "10px",
                  fontSize: "20px",
                  color: "#9E9E9E",
                  ":hover": {
                    color: "orange",
                    cursor: "pointer",
                    transition: "0.5s",
                  },
                }}
              />
              <FavoriteIcon
                sx={{
                  mx: "10px",
                  fontSize: "20px",
                  color: "#9E9E9E",
                  ":hover": {
                    color: "orange",
                    cursor: "pointer",
                    transition: "0.5s",
                  },
                }}
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
              <Box
                href="#"
                style={{
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  color: "whitesmoke",
                  textDecoration: "underline red",
                  fontWeight: "700",
                  ":hover": {
                    color: "red",
                    cursor: "pointer",
                    transition: "0.5s",
                  },
                }}
              >
                Axel Fuhrmann
              </Box>{" "}
              2025
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default RickyMorty;
