import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BooksList from '../containers/books-list.js';
import { AddBook } from '../components/add-book.js';

export const Books = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Books</h4>
      <AddBook />
      <BooksList />
    </Col>
  </Row>
);
