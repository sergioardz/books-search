import React from "react";
import "./search.css";

const Search = props => (
        <div className="card">
            <div className="card-content">
                <p className="is-3" id="search"><strong>Book:</strong></p>
                <div className="field has-addons">
                    <p className="control">
                        <input type="text" className="input" size="144" placeholder="Enter Title..." />
                    </p>
                    <p className="control">
                        <a href="" className="button is-dark">Search</a>
                    </p>
                </div>
            </div>
        </div>
);

export default Search;