import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEl from "../shared/CardEl";

function AuthorsPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h3>Loading...</h3>;

  if (error) return <h3>{error.message}</h3>;

  console.log(data);

  const { author } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            سایر مقالات
          </Typography>
          <Grid container spacing={2} mt={3}>
            {author.posts?.length > 0 ? (
              author.posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <CardEl
                    title={post.title}
                    slug={post.slug}
                    coverPhoto={post.coverPhoto}
                  />
                </Grid>
              ))
            ) : (
              <Typography variant="body1" mt={2}>
                هیچ مقاله‌ای یافت نشد.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorsPage;
