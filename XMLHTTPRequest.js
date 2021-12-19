const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // Response is ready and status is OK
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

getTodos('todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shawn.json', (err, data) => {
      console.log(data);
    });
  });
});
