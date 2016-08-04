/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { Books } from './books.js';
import { insertBook, updateBook, removeBook } from './methods.js';

describe('Books methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a book into the Books collection', function () {
    insertBook.call({
      title: 'You can\'t arrest me, I\'m the Cake Boss!' ,
      author: 'Carl Winslow'
    });

    const getBook = Books.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!', author: 'Carl Winslow' });
    assert.equal(getBook.title, 'You can\'t arrest me, I\'m the Cake Boss!');
    assert.equal(getBook.author, 'Carl Winslow');
  });

  it('updates a book in the Books collection', function () {
    const { _id } = Factory.create('book');

    updateBook.call({
      _id,
      update: {
        title: 'You can\'t arrest me, I\'m the Cake Boss!',
        author: 'Paul Savignano',
      },
    });

    const getBook = Books.findOne(_id);
    assert.equal(getBook.title, 'You can\'t arrest me, I\'m the Cake Boss!');
    assert.equal(getBook.author, 'Paul Savignano');

  });

  it('removes a book from the Books collection', function () {
    const { _id } = Factory.create('book');
    removeBook.call({ _id });
    const getBook = Books.findOne(_id);
    assert.equal(getBook, undefined);
  });
});
