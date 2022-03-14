import React from "react";
import Form from "./Form";

let userIsRegistered = true;
//toggle bewteen true & false

let App = () => {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
