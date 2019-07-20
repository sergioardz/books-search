import React from "react";
import BookResult from "../../components/bookresult"
import "./titles.css";

function ResultsContainer(props) {
    if (props.path === "/") {
        return (
            <div className="card">
                <div className="card-content">
                    <p className="is-3" id="search"><strong>Results:</strong></p>
                    {props.bookData.map((book) => {
                        const bookInfo = book.volumeInfo;
                        return <BookResult
                            title={bookInfo.title}
                            authors={bookInfo.authors}
                            description={bookInfo.description}
                            link={bookInfo.canonicalVolumeLink}
                            img={bookInfo.imageLinks}
                            path={props.path}
                            key={book.id} />
                    })}
                </div>
            </div>
        );
    } else if (props.path === "/saved") {
        if (props.savedBooks.length > 0) {
            return (
                <div className="card">
                    <div className="card-content">
                        <p className="is-3" id="search"><strong>Saved Books</strong></p>
                        {props.savedBooks.map((book) => {
                            return <BookResult
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link}
                                img={book.img}
                                id={book._id}
                                path={props.path}
                                key={book._id} />
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                // review
                <div className="card">
                    <div className="card-content">
                        <p className="is-3" id="search"><strong>Saved Books</strong></p>
                        <p>No saved books.</p>
                    </div>
                </div>
            );
        }
    }
};

export default ResultsContainer;