import React from "react";
import { render } from "react-dom";
import {
  Picker,
  LastUpdated,
  Posts,
  Refresh,
  Loading,
  Empty
} from "./components";

const App = () => (
  <>
    <Picker />
    <p>
      <LastUpdated />
      <Refresh />
    </p>
    <Loading />
    <Empty />
    <Posts />
  </>
);

render(<App />, document.getElementById("root"));
