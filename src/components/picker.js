import React from "react";
import { createComponent } from "effector-react";
import { $pickerOptions } from "../model/store";
import { selectSubreddit } from "../model/events";
import { $selectedSubreddit } from "../model";

const PickerOptions = createComponent($pickerOptions, (_, options) =>
  options.map(o => (
    <option value={o} key={o}>
      {o}
    </option>
  ))
);

export const Picker = createComponent($selectedSubreddit, (_, subreddit) => (
  <span>
    <h1>{subreddit}</h1>
    <select
      onChange={e => selectSubreddit(e.currentTarget.value)}
      value={subreddit}
    >
      <PickerOptions />
    </select>
  </span>
));
