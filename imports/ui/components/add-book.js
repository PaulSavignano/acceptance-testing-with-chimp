import React, { Component } from 'react'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertBook } from '../../api/books/methods.js'

export class AddBook extends Component {
  handleInsertBook(event) {
    event.preventDefault()
    const book = {
      title: this.refs.title.value.trim(),
      author: this.refs.author.value.trim(),
    }
    if (book.title !== '' && book.author !== '') {
      insertBook.call({
        title: book.title,
        author: book.author,
      }, (error) => {
        if (error) {
          Bert.alert(error.reason, 'danger')
        } else {
          this.refs.title.value = ''
          this.refs.author.value = ''
        }
      })
    }
  }
  render() {
    return(
      <form onSubmit={this.handleInsertBook.bind(this)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" ref="title" name="title" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" ref="author" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-success">Add Book</button>
      </form>
    )
  }
}
