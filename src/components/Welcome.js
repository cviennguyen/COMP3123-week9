import React, { Fragment } from "react";

function Welcome(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.school}</p>
    </Fragment>
  );
}

export default Welcome;
