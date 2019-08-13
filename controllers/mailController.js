
const config = require('../config')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(config.API_KEY)


class MailController {

  constructor() {

  }

  static sendMail(req) {
    let data = req.body
    return new Promise((resolve, reject) => {
      let msg = {
        to: data.email,
        from: config.FROM_EMAIL,
        subject: data.subject,
        text: data.text,
        html: data.htmlStr,
      };
      sgMail.send(msg)
      resolve(true)
    }).then(_ => {
      return { success: true }
    })
  }

  

}

module.exports = MailController