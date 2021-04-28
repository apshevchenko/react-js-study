import React, { FC } from "react";
import styled from "@emotion/styled";

export interface ListItemProps {
  key?: string;
  id: number;
  listItemHandleClick: (id: number) => void;
}

const ListItemFancyComponent = styled.div`
  color: #000000;
  border: 1px solid #bfbfc7;
  border-radius: 4px;
  box-shadow: 5px 2px 2px #c7c1bf;
  width: 25px;
  height: 25px;
  display: inline-block;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;
export const ListItemComponent: FC<ListItemProps> = ({
  id,
  listItemHandleClick,
  children,
}) => (
  <ListItemFancyComponent onClick={() => listItemHandleClick(id || 0)}>
    {children}
  </ListItemFancyComponent>
);
