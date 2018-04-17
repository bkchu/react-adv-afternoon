import React from "react";
import withPeople from "../hoc/withPeople";

const List = ({ people }) => {
  return (
    <div>
      {people[0] &&
        people.map((person, index) => {
          return (
            <p key={index}>{`${person.name.first} ${person.name.last}`}</p>
          );
        })}
    </div>
  );
};

export default withPeople(List);
