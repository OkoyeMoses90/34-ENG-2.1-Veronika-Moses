import React from 'react';

interface CardProps {
    title:string,
    description:string,
    website?:string // the ? marks this as an optional property
    children?:any
  }
const Card = (props: CardProps) => (
        // TODO: Add the description inside an HTML <p> 
        // TODO: Add the website info as an HTML <a> just below the <h2>
        <aside className="Card" >
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href={props.website}>{props.website}</a>

            <div className="ItemList"> 
              {props.children}
            </div>
        </aside>
)
export default Card
//Usage sample: <Card title="New Technologist" description="Friends from the TNT program" website="https://newtechnologists.com/"/>

  