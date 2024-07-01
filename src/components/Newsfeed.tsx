import * as React from "react";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import NewsfeedContents from "./NewsfeedContents";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`;

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});

  return (
    <div className="newsfeed">
      <NewsfeedContents query={data} />
    </div>
  );
}
