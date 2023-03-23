import React from "react";
import { createComponent } from "effector-react";
import { $posts, $isFetching } from "../model";

export const Empty = createComponent(
  [$posts, $isFetching],
  (_, [posts, isFetching]) =>
    !isFetching && posts.length === 0 && <h3>Empty.</h3>
);
