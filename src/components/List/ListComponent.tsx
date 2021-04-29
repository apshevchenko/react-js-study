import React, { FC } from "react";
import { ListItemComponent } from "./ListItemComponent";

export interface ListProps {
  list: number[];
  listItemHandleClick: (id: React.ReactNode) => void;
}

export const ListComponent: FC<ListProps> = ({ list, listItemHandleClick }) => (
  <div className="list">
    {list?.map((item) => (
      <ListItemComponent
        key={String(item)}
        listItemHandleClick={listItemHandleClick}
      >
        {item}
      </ListItemComponent>
    ))}
  </div>
);
