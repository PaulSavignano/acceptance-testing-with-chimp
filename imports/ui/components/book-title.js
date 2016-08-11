import React from 'react'
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { updateBookTitle } from '../../api/books/methods.js'

const handleUpdateBookTitle = (bookId, event) => {
  const title = event.target.value.trim()
  if (title !== '' && event.keyCode === 13) {
    updateBookTitle.call({
      _id: bookId,
      update: { title },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Title updated!', 'success')
      }
    })
  }
}

export const BookTitle = ({ book }) => (
  <div>
      <FormControl
        type="text"
        standalone
        defaultValue={ book.title }
        onKeyUp={ handleUpdateBookTitle.bind(this, book._id)}
      />
  </div>
)
