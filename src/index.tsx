import React from "react";
import { render } from "react-dom";
import { ListComponent } from "./components/List/ListComponent";

render(
  <ListComponent
    list={[1, 2, 3, 4, 5]}
    listItemHandleClick={(id) => {
      console.log(id);
    }}
  />,
  document.getElementById("root")
);
