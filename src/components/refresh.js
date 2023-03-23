import React from "react";
import { createComponent } from "effector-react";
import { invalidateSubreddit } from "../model/events";
import { fetchPostsIfNeeded, $selectedSubreddit } from "../model";

export const Refresh = createComponent($selectedSubreddit, (_, subreddit) => (
  <button
    type="button"
    onClick={() => {
      invalidateSubreddit(subreddit);
      fetchPostsIfNeeded(subreddit);
    }}
  >
    Refresh
  </button>
));
