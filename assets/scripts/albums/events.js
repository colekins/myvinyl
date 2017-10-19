'use strict'
const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onAddAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data)
  api.create(data)
    .then(ui.addAlbumSuccess)
    .then(document.getElementById('add-album').reset())

}

const addHandlers = () => {
  $('#add-album').on('submit', onAddAlbum)
}

module.exports = {
  addHandlers
}
