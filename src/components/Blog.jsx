import React from "react";
import Layout from "./Layout";
import { Box, Container, Grid } from "@mui/material";

const Blog = () => {
  return (
    <>
      <Layout>
        <Box sx={{ py: "4rem" }}>
          <Container>
            <Grid container spacing={2}>
              <Grid
                sx={{ size: { xs: "12", sm: "6", md: "4", lg: "4" } }}
              ></Grid>
            </Grid>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default Blog;
