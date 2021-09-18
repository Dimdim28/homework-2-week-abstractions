'use strict';

const phonebook = {
    Dima: '+380483744827',
    Timur: '+380603843028',
    Ivan: '+380057294681',
    Sergey: '+38038472947'
  };

  const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Dima'));

module.exports = { phonebook, findPhoneByName };
