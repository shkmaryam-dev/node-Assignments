//for run this application make sure you want to set type=module in package.json

//8. Fetch data of google page using note-fetch using async-await model.
// const fetch = require('node-fetch');
import fetch from 'node-fetch';

// const response = await fetch('https://google.com/');
// const body = await response.text();

// console.log(body);

async function asyncajaxawait()
{
  const res = await fetch('https://www.google.com/')
  console.log(res);
}

asyncajaxawait();