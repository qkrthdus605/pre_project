import React from "react";
// import PropTypes from "prop-types";

const Person = ({name, age}) => {
  return(
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      {/* {props.children} */}
    </div>
  );
};

// Person.defaultProps = {
//   name: "디폴트",
// }

// Person.propTypes = {
//   name: propTypes.string,
//   age: propTypes.number,
// }

export default Person;