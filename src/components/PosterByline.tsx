import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import type { PosterDetailsHovercardContentsQuery as HovercardQueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";
import { useFragment, useQueryLoader } from "react-relay";
import Hovercard from "./Hovercard";
import PosterDetailsHovercardContents, {
  PosterDetailsHovercardContentsQuery,
} from "./PosterDetailsHovercardContents";
const { useRef } = React;

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment @arguments(width: 400)
    }
  }
`;

export type Props = {
  poster: PosterBylineFragment$key;
};

export default function PosterByline({ poster }: Props): React.ReactElement {
  const data = useFragment(PosterBylineFragment, poster);
  const hoverRef = useRef(null);

  const [hovercardQueryRef, loadHovercardQuery] =
    useQueryLoader<HovercardQueryType>(PosterDetailsHovercardContentsQuery);

  function onBeginHover() {
    loadHovercardQuery({ posterID: data.id });
  }

  return (
    <div ref={hoverRef} className="byline">
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
      <Hovercard onBeginHover={onBeginHover} targetRef={hoverRef}>
        <PosterDetailsHovercardContents queryRef={hovercardQueryRef} />
      </Hovercard>
    </div>
  );
}
