const express = require('express');
const axios = require('axios');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const service = 'https://pokeapi.co/api/v2';

app.get('/service/pokemon/from/:id', async(request, response) => {
  const { id } = request.params;
  const common = await axios.get(`${service}/pokemon/${id}`);
  response.send(common.data);
});

app.get('/service/pokemon/sequence', async(request, response) => {
  const { offset, limit } = request.query;
  if(
    !offset ||
    !limit
    ) return response.send({ error: 'Request query parameters not found' });
  const common = await axios.get(`${service}/pokemon?offset=${offset}&limit=${limit}`);
  response.send(common.data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));