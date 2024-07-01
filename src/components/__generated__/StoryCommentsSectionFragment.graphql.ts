/**
 * @generated SignedSource<<30099e8180bab7fbac7f32ab7648908e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryCommentsSectionFragment$data = {
  readonly comments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"CommentFragment">;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly hasNextPage: boolean | null;
    } | null;
  } | null;
  readonly id: string;
  readonly " $fragmentType": "StoryCommentsSectionFragment";
};
export type StoryCommentsSectionFragment$key = {
  readonly " $data"?: StoryCommentsSectionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StoryCommentsSectionFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "comments"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 3,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./StoryCommentsSectionPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "StoryCommentsSectionFragment",
  "selections": [
    {
      "alias": "comments",
      "args": null,
      "concreteType": "CommentsConnection",
      "kind": "LinkedField",
      "name": "__StoryCommentsSectionFragment_comments_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CommentsConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Comment",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CommentFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Story",
  "abstractKey": null
};
})();

(node as any).hash = "53cedc6acf9acbc1b8c6952399eae018";

export default node;
