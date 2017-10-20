'use strict'

const store = require('../store')

const addAlbumSuccess = function (data) {
  console.log(data)
  $('#message').text(data.album.title + ' has been added to your collection!')
}

const deleteSuccess = function (data) {
  console.log(store.albums)
  // $('#message').text(data.album.title + ' has been added to your collection!')
}

module.exports = {
  addAlbumSuccess,
  deleteSuccess
}
