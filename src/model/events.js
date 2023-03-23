import { createEvent, createEffect } from "effector";

export const selectSubreddit = createEvent();
export const invalidateSubreddit = createEvent();
export const getPosts = createEffect();
