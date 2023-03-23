import React from "react";
import { createComponent } from "effector-react";
import { $posts, $isFetching } from "../model";

export const Loading = createComponent(
  [$posts, $isFetching],
  (_, [posts, isFetching]) =>
    isFetching && posts.length === 0 && <h3>Loading...</h3>
);
