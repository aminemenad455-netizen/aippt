import got from 'got';

const URL = 'https://aippt.com';
const CODE = 'ACTIVATE_DEAL';

async function fetchPage() {
  try {
    const response = await got(URL);
    console.log($(System.Collections.Hashtable.name) page fetched — status: ${response.statusCode}`);
    console.log(Content length: ${response.body.length} bytes`);
  } catch (err) {
    console.error('Fetch failed:', err.message);
  }
}

console.log($(System.Collections.Hashtable.name) — Use code: ${CODE}`);
console.log(URL: ${URL}`);
fetchPage();
