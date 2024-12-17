import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO, GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";

function Blog() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h4>Loading...</h4>;

  if (error) return <h4>Error...</h4>;

  return (
    <Grid container spacing={2} >
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blog;
