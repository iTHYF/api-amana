const express = require('express');
const server = express ();
const paginas = require ('./src/data/paginas.json');

server.get('/src/data/paginas.json', (req,res) => {
    return res.json(paginas)
})
server.listen(3000, () => {

    console.log('servidor on')
});