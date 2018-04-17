import React from "react";
import withPeople from "../hoc/withPeople";
import withFilter from "../hoc/withFilter";

const List = ({ people, filterThis, list }) => {
  return (
    <div>
      <h1>Filter</h1>
      <button onClick={() => filterThis(people)}>Filter</button>
      {list[0]
        ? list.map((item, index) => {
            return <p key={index}>{`${item.name}`}</p>;
          })
        : people[0] &&
          people.map((person, index) => {
            return <li key={index}>{`${person.name}`}</li>;
          })}

      <br />
    </div>
  );
};

export default withFilter(withPeople(List));
