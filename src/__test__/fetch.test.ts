import fetch from 'cross-fetch';

test('fetch', async () => {
  const response = await fetch('https://api.backend.dev/user');

  console.log('response: ', response);

  const jsonData = await response.json();

  console.log('jsonData: ', jsonData);
});
