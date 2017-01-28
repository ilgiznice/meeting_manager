import React, { PropTypes } from 'react'

require('!style!css!sass!../../../../static/style/clients.scss')

const groupByFirstCharacter = ({ clients }) => {
  const groupedCollection = {}
  clients.forEach((client) => {
    const firstLetter = client.name.charAt(0);
    if (groupedCollection[firstLetter] === undefined) {
      groupedCollection[firstLetter] = []
    }      
    groupedCollection[firstLetter].push(client);
  })
  return groupedCollection
}

const Clients = ({ clients }) => (
  <div id="clients">
    {Object.keys(groupByFirstCharacter({ clients })).map((character, i) => (
      <div key={i}>
        <b>{character}</b>
        {groupByFirstCharacter({ clients })[character].map((client, j) => (
          <div key={client.id}>
            {client.name}
          </div>
        ))}
      </div>
    ))}
  </div>
)

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Clients
