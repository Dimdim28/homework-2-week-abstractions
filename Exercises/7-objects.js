'use strict';

const fn = () => {
  const obj1 = { name: 'Dima' };//1
  let obj2 = { name: 'Sergey' };//2

  obj1.name = 'Ivan'; //3
  obj2.name = 'Valera'; //4

  obj2 = { name: 'Ivan Valera' };

};

fn();
module.exports = { fn };