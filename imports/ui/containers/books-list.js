import { composeWithTracker } from 'react-komposer';
import { Books } from '../../api/books/books.js';
import { BooksList } from '../components/books-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('books');
  if (subscription.ready()) {
    const books = Books.find().fetch();
    onData(null, { books });
  }
};

export default composeWithTracker(composer, Loading)(BooksList);
