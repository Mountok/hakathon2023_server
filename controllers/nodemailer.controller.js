const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

class NodemailerController {
  async sendHelpMail(user_name, user_mail, user_phone, user_text) {
    const mailOptions = {
      from: "gevent809@gmail.com",
      to: "themountok@gmail.com",
      subject: `Обратная связь от ${user_name}!.`,
      text: `${user_text}. Телефон ${user_phone}. Почта для связи ${user_mail}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success: " + info);
      }
    });
  }
}

module.exports = new NodemailerController();
