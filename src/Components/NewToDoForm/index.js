import React from "react";

const NewToDoForm = (props) => (
  <div>
    <input
      className="myInput App"
      type="text"
      maxLength="10"
      onChange={props.onChange}
      value={props.draft}
    />
    <button className="App" onClick={props.onSubmit}>
      Dawaj heheszki
    </button>
  </div>
);

export default NewToDoForm;
