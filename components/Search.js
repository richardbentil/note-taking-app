import { useState } from "react";


function Search() {
  return (
    <div>
      <div>
        <label className="sr-only" htmlFor="inlineFormInputGroupSearch">
          Username
        </label>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-transparent border-0 text-dark">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <input
            type="search"
            className="form-control border-0 border-bottom"
            id="search"
            placeholder="Search Notes"
          />
        </div>
      </div>
    </div>
  );
}

export default Search
