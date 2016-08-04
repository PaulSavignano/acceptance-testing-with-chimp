import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Books = new Mongo.Collection('Books');

Books.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Books.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Books.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  author: {
    type: String,
    label: 'The title of the book.',
  }
});

Books.attachSchema(Books.schema);

Factory.define('book', Books, {
  title: () => faker.hacker.phrase(),
});
