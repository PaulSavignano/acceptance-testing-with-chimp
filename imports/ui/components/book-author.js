import React from 'react'
import { Row, Col, FormControl } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { updateBookAuthor } from '../../api/books/methods.js'

const handleUpdateBookAuthor = (bookId, event) => {
  const author = event.target.value.trim()
  if (author !== '' && event.keyCode === 13) {
    updateBookAuthor.call({
      _id: bookId,
      update: { author },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Bert.alert('Author updated!', 'success')
      }
    })
  }
}

export const BookAuthor = ({ book }) => (
  <div>
    <FormControl
      type="text"
      standalone
      defaultValue={ book.author }
      onKeyUp={ handleUpdateBookAuthor.bind(this, book._id)}
    />
  </div>
)
