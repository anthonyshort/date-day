var assert = require('assert');
var day = require('date-day');

describe('Day', function(){

  it('should get the correct day', function(){
    assert( day(new Date(2014, 0, 1)).full() === 'Wednesday' );
    assert( day(new Date(2014, 0, 1)).short() === 'Wed' );
  });

});