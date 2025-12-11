import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Pages", path: "/pages" },
    { name: "Tour list", path: "/tours" },
    { name: "Date & Pricing", path: "/pricing" },
    { name: "Destinations", path: "/destinations" },
    { name: "Blog", path: "blog" },
  ];

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
      <AppBar position="sticky" className="navbar">
        <Container>
          <Toolbar disableGutters maxWidth="xl" className="navbarMain">
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              className="navTitle"
              sx={{
                pr: "6.5rem",
                display: { xs: "none", md: "flex" },
                fontFamily: "ui-serif",
                fontWeight: 700,
                letterSpacing: "0.1rem",
                color: "inherit",
                fontSize: "2rem",
                textDecoration: "none",
                textTransform: "capitalize",
                lineHeight: "6rem",
              }}
            >
              Travel Tour
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
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "ui-serif",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                fontSize: "2rem",
                textDecoration: "none",
              }}
            >
              Travel Tour
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className="navLinks"
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#222222",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    textTransform: "capitalize",
                    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                    ":hover ": {
                      color: "rgb(0,100,250)",
                      transition: "0.5s",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box>
              <Button variant="contained" className="btnHover1 btnNav">
                Buy Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
