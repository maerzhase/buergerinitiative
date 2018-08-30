export const BASE_URL = 'http://buergerinitiative.lili16.de/lists/index.php';

/*
formtoken: 8eaedf333c9bef52cb1a3632d1766697
makeconfirmed: 0
email: markus@nand.io
emailconfirm: markus@nand.io
list[2]: signup
listname[2]: newsletter
VerificationCodeX:
subscribe: Subscribe
*/

export const subscribe = (email, name) => {
  const json = {
    email,
    emailconfirm: email,
    attribute1: name,
    formtoken: '8eaedf333c9bef52cb1a3632d1766697',
    makeconfirmed: 0,
    'list[2]': 'signup',
    'listname[2]': 'newsletter',
    VerificationCodeX: '',
    subscribe: 'Subscribe',
  };
  const data = new FormData();
  Object.keys(json).forEach((key) => {
    data.append(key, json[key]);
  });
  return fetch(`${BASE_URL}?p=subscribe`, {
    method: 'POST',
    body: data,
  });
};
