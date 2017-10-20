'use strict'

const store = require('../store')
const albumTemplate = require('../templates/new-album.handlebars')

const addAlbumSuccess = function (data) {
  // console.log(data)
  const albumHtml = albumTemplate({ album: data })
  store.newAlbum = data
  $('.content').append(albumHtml)
  $('#message').text(data.album.title + ' has been added to your collection!')
}

const editAlbumSuccess = function (data) {
  store.newAlbum = data
  $('#message').text(data.album.title + ' by ' + data.album.artist + ' has been updated.')
  $('#editModal').modal('hide')
}

const addAlbumFail = function () {
  $('#message').text('There was an error. Please try again.')
}

const deleteSuccess = function (data) {
  console.log(data)
  $('#message').text('Album deleted.')
}

const deleteFail = function (data) {
  console.log(data)
  $('#message').text('There was an error. Please try again.')
}

module.exports = {
  addAlbumSuccess,
  deleteSuccess,
  addAlbumFail,
  deleteFail,
  editAlbumSuccess
}
