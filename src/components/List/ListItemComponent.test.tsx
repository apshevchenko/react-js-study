import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ListItemComponent } from "./ListItemComponent";

afterEach(cleanup);

describe("List Item Component", () => {
  it("Calls handleClick callback on ListItemComponent", () => {
    const handleClick = jest.fn();
    const id = 1;

    render(
      <ListItemComponent id={id} listItemHandleClick={handleClick}>
        {id}
      </ListItemComponent>
    );

    expect(screen.getByText(id)).toBeInTheDocument();

    userEvent.click(screen.getByText(id));
    expect(handleClick).toHaveBeenCalled();
  });
});
