import axios from "axios";
import { createStore, combine, restore } from "effector";
import { getPosts, selectSubreddit, invalidateSubreddit } from "./events";
import { $didInvalidate } from "./store";

getPosts.use(subreddit =>
  axios(`https://www.reddit.com/r/${subreddit}.json`).then(({ data }) => data)
);

$didInvalidate.on(invalidateSubreddit, () => true).reset(getPosts);

export const $selectedSubreddit = restore(selectSubreddit, "reactjs");
export const $isFetching = restore(getPosts.pending, false);
export const $postsBySubreddit = createStore({})
  .on(getPosts.done, (state, { result: { data }, params }) => ({
    ...state,
    [params]: {
      lastUpdated: Date.now(),
      items: data.children.map(({ data }) => data)
    }
  }))
  .on(getPosts.fail, (_, { error }) => error);

export const $posts = combine(
  $postsBySubreddit,
  $selectedSubreddit,
  (postsMap, selected) => {
    const posts = postsMap[selected];

    return posts ? posts.items : [];
  }
);

export const $lastUpdated = combine(
  $postsBySubreddit,
  $selectedSubreddit,
  (postsMap, selected) => {
    const posts = postsMap[selected];
    const date = posts ? posts.lastUpdated : Date.now();

    return new Date(date).toLocaleTimeString();
  }
);

export const shouldFetchPosts = subreddit => {
  const postsMap = $postsBySubreddit.getState();
  const isFetching = $isFetching.getState();
  const didInvalidate = $didInvalidate.getState();
  const posts = postsMap[subreddit];

  if (!posts) {
    return true;
  } else if (isFetching) {
    return false;
  } else {
    return didInvalidate;
  }
};

export const fetchPostsIfNeeded = subreddit => {
  if (shouldFetchPosts(subreddit)) {
    getPosts(subreddit);
  }
};

$selectedSubreddit.watch(subreddit => {
  fetchPostsIfNeeded(subreddit);
});
