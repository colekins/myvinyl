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
  const panel = button.parentElement.parentElement.parentElement
  const data = $(panel).attr('data-id')
  // console.log(data)
  api.destroy(data)
    .then(ui.deleteSuccess)
    .then(panel.remove())
    .catch(ui.deleteFail)
}

let albumId = 0
let editPanel

const openEdit = function (event) {
  event.preventDefault()
  const button = event.target
  const panel = button.parentElement.parentElement.parentElement
  const albId = $(panel).attr('data-id')
  albumId = albId
  const title = button.parentElement.previousSibling.previousSibling
  editPanel = title
  const albumTitle = title.firstChild
  const albumArtist = albumTitle.nextSibling
  $('#edit-message').text(albumTitle.textContent + ' by ' + albumArtist.textContent)
  document.getElementById('edit-title').value = albumTitle.textContent
  document.getElementById('edit-artist').value = albumArtist.textContent
  // console.log(albumId)
}

const onEditAlbum = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const albumTitle = editPanel.firstChild
  const albumArtist = albumTitle.nextSibling
  albumTitle.textContent = data.album.title
  albumArtist.textContent = data.album.artist
  api.update(data, albumId)
    .then(ui.editAlbumSuccess)
  //   .then(document.getElementById('add-album').reset())
  //   .catch(ui.addAlbumFail)
}

// const onGetAlbums = function (data) {
//   event.preventDefault()
//   api.index(data)
//     .then(ui.allAlbumsSuccess)
// }

const addHandlers = () => {
  $('#add-album').on('submit', onAddAlbum)
  $('#content').on('click', '#delete-album', onDeleteAlbum)
  $('#content').on('click', '#edit-album', openEdit)
  $('#edit-album').on('submit', onEditAlbum)
}

module.exports = {
  addHandlers
}
