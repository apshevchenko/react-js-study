import React from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ListComponent, ListProps } from "./ListComponent";

export default {
  title: "ListComponent",
  component: ListComponent,
  argTypes: {
    list: { control: { type: "array" }, defaultValue: [0, 1, 2, 3, 4, 5] },
  },
};

const listItemHandleClick = action("ListItemClick");

export const testComponentStory: Story<ListProps> = (args) => (
  <ListComponent {...args} listItemHandleClick={listItemHandleClick} />
);
