import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
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

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO ,GET_AUTHORS_INFO};
