export const BASE_URL = 'https://buergerinitiative.lili16.de/lists/';

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

export const subscribe = (email, name, anschrift) => {
  const json = {
    email,
    emailconfirm: email,
    attribute1: name,
    attribute2: anschrift,
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
  return fetch(`${BASE_URL}?p=asubscribe&id=3`, {
    method: 'POST',
    body: data,
  });
};


/*
  p: unsubscribe
  email: markus@nand.io
  unsubscribe: Continue
*/

export const unsubscribe = (email) => {
  const json = {
    email,
    p: 'unsubscribe',
    unsubscribe: 'Continue',
  };
  const data = new FormData();
  Object.keys(json).forEach((key) => {
    data.append(key, json[key]);
  });
  return fetch(`${BASE_URL}?p=unsubscribe`, {
    method: 'POST',
    body: data,
  });
};

/*
  p: confirm
  uid: 8f565e45220c54f57e040d603a722e6e
*/

export const confirm = uid => fetch(`${BASE_URL}?p=confirm&uid=${uid}`, {
  method: 'GET',
});
