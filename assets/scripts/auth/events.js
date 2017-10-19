'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const hide = require('./hide')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(hide.toggleLogin)
    .then(hide.togglePassword)
    .then(hide.toggleSignout)
    .then(hide.toggleSignup)
    .then(hide.togglePanel)
    .then(hide.toggleAlbumFields)
    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .then(hide.toggleLogin)
    .then(hide.togglePassword)
    .then(hide.toggleSignout)
    .then(hide.toggleSignup)
    .then(hide.togglePanel)
    .then(hide.toggleAlbumFields)
    .catch(ui.signOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#login').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
