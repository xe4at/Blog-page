import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>{error.message}</h3>;

  console.log(data);

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <a
              href={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography variant="body2" color="text.secondary">
                {author.name}
              </Typography>
            </a>
          </Grid>
          {index !== author.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
