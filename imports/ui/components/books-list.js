import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Book } from './book.js';

export const BooksList = ({ books }) => (
  books.length > 0 ? <ListGroup className="books-list">
    {books.map((book) => (
      <Book key={ book._id } book={ book } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No books yet.</Alert>
);

BooksList.propTypes = {
  books: React.PropTypes.array,
};
