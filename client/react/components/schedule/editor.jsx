import React, { PropTypes } from 'react'

require('!style!css!sass!../../../../static/style/editor.scss')

const Editor = ({ participant, description, date, clients, participantChange, descriptionChange, toggleEditor, save }) => (
  <div className="editor">
    <form>
      <div className="form-fields">
        <label htmlFor="participant">Participant</label>
        <div>
          <input type="text" id="participant" value={participant} onChange={e => participantChange({ participant: e.target.value })} required autoComplete="off" />
          <div id="autocomplete" className={!participant.length && 'hidden'}>
            {clients
              .filter(client => (
                client.name.toLowerCase().indexOf(participant.toLowerCase()) !== -1 && client.name.toLowerCase() !== participant.toLowerCase()
              ))
              .map(client => (
                <div className="item" onClick={() => participantChange({ participant: client.name })}>{client.name}</div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="form-fields">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" value={description} onChange={e => descriptionChange({ description: e.target.value })} required />
      </div>
      <button type="button" onClick={() => toggleEditor()}>Отмена</button>
      <button type="submit" onClick={(e) => {
        if (participant.length && description.length) {
          e.preventDefault()
          e.stopPropagation()
          save({ date })
        }
      }}>Сохранить</button>
    </form>
  </div>
)

Editor.propTypes = {
  participant: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  clients: PropTypes.arrayOf(PropTypes.object),
  participantChange: PropTypes.func.isRequired,
  descriptionChange: PropTypes.func.isRequired,
  toggleEditor: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
}

Editor.defaultProps = {
  participant: '',
  description: '',
  clients: [],
}

export default Editor
