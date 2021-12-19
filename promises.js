// promise example

const getTodosPromise = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('could not fetch data');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

getTodosPromise('todos/luigi.json')
  .then((data) => {
    console.log('promise 1 resolved', data);
    return getTodosPromise('todos/mario.json')
  }).then((data) => {
    console.log('Promise 2 resolved', data);
    return getTodosPromise('todos/shawnd.json')
  }).then((data) => {
    console.log('Promise 3 resolved', data);
  }).catch((err) => {
    console.log('Promise rejected', err);
  });
