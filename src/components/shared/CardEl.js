import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function CardEl({ title, slug, coverPhoto, author, props }) {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      <CardHeader
        avatar={<Avatar src={coverPhoto.url} sx={{ marginLeft: 2 }} />}
        title={
          <Typography component="p" variant="p" color="text.primary">
            {title}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight="600"
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{textDecoration:"none",width:"100%"}}>
          <Button
            variant="outline"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardEl;
