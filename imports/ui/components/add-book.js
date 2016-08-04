import React from 'react'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertBook } from '../../api/books/methods.js'

export const AddBook = () => (
  <form id="add-book">
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" className="form-control"/>
    </div>
    <div className="form-group">
      <label htmlFor="author">Author</label>
      <input type="text" name="author" className="form-control"/>
    </div>
    <button type="submit" className="btn btn-success">Add Book</button>
  </form>
)
