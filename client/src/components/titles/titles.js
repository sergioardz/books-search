import React from "react";
import "./titles.css";

const Titles = props => (
    <div className="card">
        <div className="card-content">
            <p className="is-3" id="search"><strong>Results:</strong></p>
            <div className="card">
                <div className="card-content">
                    <nav className="level">
                        <div className="level-left">
                            <p className="level-item"><h1 className="title is-4"><strong>Title</strong></h1></p>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="field">
                                    <button className="button is-small is-dark is-outlined">View</button>&nbsp;
                                    <button className="button is-small is-dark is-outlined">Save</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <a id="title" href="#"><p>Link to Title</p></a>
                    <p id="author">Writen by Author...</p>
                    <div className="columns">
                        <div className="column is-2">
                            <img src="https://via.placeholder.com/180" width="180px" height="180px" />
                        </div>
                        <div className="column is-10">
                            <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Titles;