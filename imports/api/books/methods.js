import { Books } from './books';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertBook = new ValidatedMethod({
  name: 'books.insert',
  validate: new SimpleSchema({
    title: { type: String },
    author: { type: String },
  }).validator(),
  run(document) {
    Books.insert(document);
  },
});

export const updateBook = new ValidatedMethod({
  name: 'books.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
    'update.author': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Books.update(_id, { $set: update });
  },
});

export const removeBook = new ValidatedMethod({
  name: 'books.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Books.remove(_id);
  },
});

rateLimit({
  methods: [
    insertBook,
    updateBook,
    removeBook,
  ],
  limit: 5,
  timeRange: 1000,
});
