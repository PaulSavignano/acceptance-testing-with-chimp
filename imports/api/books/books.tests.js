/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { Books } from './books.js';

describe('Books collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Book, 'object');
  });
});
