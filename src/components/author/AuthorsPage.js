import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";

function AuthorsPage() {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <h3>Loading...</h3>;

  if (errors) return <h3>Error...</h3>;

  console.log(data)

  return <div>AuthorsPage</div>;
}

export default AuthorsPage;
