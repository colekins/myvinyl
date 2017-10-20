'use strict'

const store = require('../store')
const albumsTemplate = require('../templates/album-listing.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully! Please sign in.')
  $('#signupModal').modal('hide')
  // console.log('yoooooooo')
}

const signUpFailure = function (error) {
  $('#signup-message').text('Error on sign up. Please try again.')
  console.error(error)
}

const signInSuccess = function (response) {
  $('#message').text('You are now signed in.')
  // console.log('signIn success ran. data is :', response)
  store.user = response.user
  $('#loginModal').modal('hide')
}

const signInFailure = function (error) {
  $('#login-message').text('Error on sign in. Please try again.')
  console.log('signIn failure ran. error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('You\'re now signed out.')
  $('#content').html('')
  // console.log('signOut success ran. and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out.')
  console.log('signOut failure ran. error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully.')
  console.log('changePassword success ran. and nothing was returned')
  $('#passwordModal').modal('hide')
}

const changePasswordFailure = function (error) {
  $('#password-message').text('There was an error. Please try again.')
  console.log('changePassword failure ran. error is :', error)
}

const populateSuccess = function (data) {
  // console.log(store.user)
  const albumsHtml = albumsTemplate({ albums: data.albums })
  store.albums = data.albums
  console.log(data.albums)
  $('.content').append(albumsHtml)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  populateSuccess
}
