fetch('https://textbelt.com/text', {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '2285964820',
    message: 'Hello world',
    key: 'textbelt',
  }),
}).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
});