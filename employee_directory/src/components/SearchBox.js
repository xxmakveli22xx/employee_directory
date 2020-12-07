import React from "react";
import "../styles/SearchBox.css";

const SearchBox = (props) => {

  return (
    <form>
    <div className="form-group search-widget">
      <div className="input-group mb-3">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee Name Here"
          id="search"
        />
          <button onClick={props.handleFormSubmit} className="btn-primary"><i class="fas"></i></button>
      </div>
    </div>
  </form>
  );
}
export default SearchBox;

