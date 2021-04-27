import React, { FC } from 'react'
import { ListItemComponent } from './ListItemComponent'

export interface ListProps {
    list: number[];
    listItemHandleClick: (id: number) => void
  }

export const ListComponent: FC<ListProps> = ({ list, listItemHandleClick }) => {
  return (<div className="list">
      {list?.map((item) => <ListItemComponent key={String(item)} id={item} listItemHandleClick={listItemHandleClick}>{item}</ListItemComponent>)}
    </div>)
}
