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
    .catch(ui.addAlbumFail)
}

const onDeleteAlbum = function (event) {
  event.preventDefault()
  const button = event.target
  const panel = button.parentElement.parentElement
  const data = $(panel).attr('data-id')
  console.log(data)
  api.destroy(data)
    .then(ui.deleteSuccess)
    .then(panel.remove())
    .catch(ui.deleteFail)
}

// const onGetAlbums = function (data) {
//   event.preventDefault()
//   api.index(data)
//     .then(ui.allAlbumsSuccess)
// }

const addHandlers = () => {
  $('#add-album').on('submit', onAddAlbum)
  $('#content').on('click', '#delete-album', onDeleteAlbum)
}

module.exports = {
  addHandlers
}
