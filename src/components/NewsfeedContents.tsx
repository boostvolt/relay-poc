import * as React from "react";
import { usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { NewsfeedContentsFragment$key } from "./__generated__/NewsfeedContentsFragment.graphql";
import Story from "./Story";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery") {
    viewer {
      newsfeedStories(after: $cursor, first: $count)
        @connection(key: "NewsfeedContentsFragment_newsfeedStories") {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`;

export type Props = {
  query: NewsfeedContentsFragment$key;
};

export default function NewsfeedContents({ query }: Props): React.ReactElement {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    NewsfeedContentsFragment,
    query
  );

  function onEndReached() {
    loadNext(3);
  }

  const storyEdges = data.viewer.newsfeedStories.edges;

  return (
    <>
      {storyEdges.map((storyEdge) => (
        <Story key={storyEdge.node.id} story={storyEdge.node} />
      ))}
      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </>
  );
}
