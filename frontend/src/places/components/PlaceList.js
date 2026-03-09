import React from "react";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {

  if (props.items.length === 0) {
    return <h2>No places found.</h2>;
  }

  return (
    <ul className="place-list">

      {props.items.map((place) => (

        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}

          location={place.location}   // IMPORTANT

          creatorId={place.creator}
          onDelete={props.onDeletePlace}
        />

      ))}

    </ul>
  );
};

export default PlaceList;