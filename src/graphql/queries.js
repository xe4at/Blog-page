import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
query{
  posts {
    title
    slug
    id
    coverPhoto {
      url
    }
  }
  authors {
    name
    avatar {
      url
    }
  }
}
`;

export { GET_BLOGS_INFO };

