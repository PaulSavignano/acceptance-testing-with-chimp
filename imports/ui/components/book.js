import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeBook } from '../../api/books/methods.js';
import { BookAuthor } from './book-author.js'
import { BookTitle } from './book-title.js'

const handleRemoveBook = (bookId, event) => {
  event.preventDefault();
  removeBook.call({
    _id: bookId,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Bert.alert('Book removed!', 'success');
    }
  });
};

export const Book = ({ book }) => (
  <ListGroupItem key={ book._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <BookTitle book={ book } />
        <BookAuthor book={ book } />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveBook.bind(this, book._id) }>
          Remove
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);
