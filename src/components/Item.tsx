import React from 'react';

interface ItemProps {
    name:string,
    team?: number,
    email:string,
    children?:any
  }
const Item = (props: ItemProps) => (
        <div className="Item" >
            <ul>
                <li><b>Name:</b> {props.name}, Team: {props.team}</li>
                <li><b>Email:</b> {props.email}</li>
            </ul>
        </div>
)
export default Item;

