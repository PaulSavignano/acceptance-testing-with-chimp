import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateBook, removeBook } from '../../api/books/methods.js';

const handleUpdateBook = (bookId, event) => {
  const title = event.target.value.trim();
  if (title !== '' && event.keyCode === 13) {
    updateBook.call({
      _id: bookId,
      update: { title },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document updated!', 'success');
      }
    });
  }
};

const handleRemoveBook = (bookId, event) => {
  event.preventDefault();
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    removeBook.call({
      _id: bookId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Book removed!', 'success');
      }
    });
  }
};

export const Book = ({ book }) => (
  <ListGroupItem key={ book._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <FormControl
          type="text"
          standalone
          defaultValue={ book.title }
          onKeyUp={ handleUpdateBook.bind(this, book._id) }
        />
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
