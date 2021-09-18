'use strict';

const phonebook = [
  { name: 'Sergey', phone: '+380558822669' },
  { name: 'Timur', phone: '+380663682972' },
  {name: 'Dima', phone: '+3808434389741'}
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};
console.log(findPhoneByName('Sergey'));
module.exports = { phonebook, findPhoneByName };

