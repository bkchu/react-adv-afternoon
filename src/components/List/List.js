import React from "react";
import withPeople from "../hoc/withPeople";
import withFilter from "../hoc/withFilter";
import withSort from "../hoc/withSort";

const List = ({ people, filterThis, filteredList, sortThis, sortedList }) => {
  return (
    <div>
      <h1>Filter</h1>
      <button onClick={() => filterThis(people)}>Filter</button>
      <button onClick={() => sortThis(people)}>Sort</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div>
          {filteredList[0]
            ? filteredList.map((item, index) => {
                return <li key={index}>{`${item.name}`}</li>;
              })
            : people[0] &&
              people.map((person, index) => {
                return <li key={index}>{`${person.name}`}</li>;
              })}
        </div>
        <br />
        <div>
          {sortedList[0] &&
            sortedList.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
        </div>
      </div>
    </div>
  );
};

export default withSort(withFilter(withPeople(List)));
