'use strict'

const store = require('../store')
const albumTemplate = require('../templates/new-album.handlebars')
const art = require('album-art')

// art('The Beatles', 'Abbey Road', 'extralarge', function (err, url) {
//   console.log(url)
//   console.log(err)
// })

const addAlbumSuccess = function (data) {
  // console.log(data)
  const albumHtml = albumTemplate({ album: data })
  store.newAlbum = data
  // const artist = data.album.artist
  // const album = data.album.title
  // const idTag = data.album.id
  // let imgLink
  // art(artist, album, 'extralarge', function (err, url) {
  //   imgLink = url
  //   console.log(err)
  // })
  // console.log(imgLink
  //   // trying to target newly added album panel.. not working
  // const panel = $('div[dataid=' + idTag + ']')
  // console.log(panel)
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
  // console.log(data)
  $('#message').text('Album deleted.')
}

const deleteFail = function (data) {
  // console.log(data)
  $('#message').text('There was an error. Please try again.')
}

module.exports = {
  addAlbumSuccess,
  deleteSuccess,
  addAlbumFail,
  deleteFail,
  editAlbumSuccess
}
