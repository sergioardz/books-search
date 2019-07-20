import React from "react";
import API from "../../utils/API";
import { BrowserRouter as Router } from "react-router-dom";

class BookResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            deleted: false
        }
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleSaveClick = function (e) {
        this.setState({ saved: true });
        const bookData = {
            title: this.props.title,
            authors: this.props.authors,
            link: this.props.link,
            img: this.props.img,
            description: this.props.description
        }
        e.preventDefault();
        API.addBookToDB(bookData).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    handleDeleteClick(e) {
        this.setState({ deleted: true });
        e.preventDefault();
        API.deleteBook(this.props.id).then(
            (response) => {
                console.log(response);
                Router.dispatch(this.props.location, null)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

    render() {
        return (
            <div className="card" id={(this.props.id) ? this.props.id : null} style={{ display: this.state.deleted ? "none" : "block" }}>
                <div className="card-content">
                    <nav className="level">
                        <div className="level-left">
                            <p className="level-item"><h1 className="title is-4"><strong>{this.props.title}</strong></h1></p>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <div className="field">
                                    {
                                        // if link to book exists include View button else do not
                                        (this.props.link) ? <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button className="button is-small is-dark is-outlined" type="button" name="view">View</button></a> : null
                                    }
                                    {' '}
                                    {
                                        // if this.props.path is "/" display save button else display Delete button
                                        (this.props.path === "/") ? <button className="button is-small is-dark is-outlined" type="button" name="save" onClick={this.handleSaveClick} disabled={this.state.saved}>{(this.state.saved) ? "Saved" : "Save"}</button> : <button className="button is-small is-dark is-outlined" type="button" name="Delete" onClick={this.handleDeleteClick} disabled={this.state.deleted}>Delete</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                    <p id="author">Written by <strong>{(this.props.authors) ? this.props.authors.join(", ") : "N/A"}</strong></p>
                    <div className="columns">
                        <div className="column is-2">
                            {(this.props.img) ? <img src={
                                // if smallthubmail exists on this.props.img use that else if thumbnail exists on this.props.img use that else leave src empty
                                (this.props.img.smallThumbnail) ? this.props.img.smallThumbnail :
                                    (this.props.img.thumbnail) ? this.props.img.thumbnail : ""
                            } alt="book cover" /> : null}
                        </div>
                        <div className="column is-10">
                            <p id="description">{(this.props.description)? this.props.description: "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookResult;