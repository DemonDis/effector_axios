import React from "react";
import { createComponent } from "effector-react";
import { $posts, $isFetching } from "../model";

export const Posts = createComponent(
  [$posts, $isFetching],
  (_, [posts, isFetching]) =>
    posts.length > 0 && (
      <div style={{ opacity: isFetching ? 0.5 : 1 }}>
        <ul>
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    )
);
