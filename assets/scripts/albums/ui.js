'use strict'

const store = require('../store')
const albumTemplate = require('../templates/new-album.handlebars')
// const art = require('album-art')
const art = require('../getart')

const albumCover = function (id, img) {
  const newPanel = document.getElementsByClassName(id)
  const albumImage = document.createElement('img')
  albumImage.src = (img)
  $(newPanel).find('p').append(albumImage)
}

const fetchArt = function (artist, album) {
  const id = store.newAlbum.id
  art(artist, album, 'large', function (err, url) {
    store.newAlbum.image = url
    const error = err
    albumCover(id, store.newAlbum.image)
  })
}

const addAlbumSuccess = function (data) {
  const albumHtml = albumTemplate({ album: data })
  store.newAlbum = data.album
  store.albums.push(data.album)
  $('.content').append(albumHtml)
  $('#message').text(data.album.title + ' has been added to your collection!')
  fetchArt(store.newAlbum.artist, store.newAlbum.title)
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
