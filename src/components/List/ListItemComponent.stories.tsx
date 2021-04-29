import React from "react";
import { Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ListItemComponent, ListItemProps } from "./ListItemComponent";

export default {
  title: "ListItemComponent",
  component: ListItemComponent,
  argTypes: {
    children: {
      control: { type: "number" },
      defaultValue: 1,
    },
  },
};

export const ListItemComponentStory: Story<ListItemProps> = (args) => (
  <ListItemComponent {...args} listItemHandleClick={action("ListItemClick")} />
);
