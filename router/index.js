module.exports = function(app) {
  const mail = require('./mail')

  app.use('/api/mail', mail)
}