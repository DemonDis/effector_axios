import React from "react";
import { createComponent } from "effector-react";
import { $lastUpdated } from "../model";

export const LastUpdated = createComponent($lastUpdated, (_, lastUpdated) => (
  <span>Last updated at {lastUpdated} </span>
));
