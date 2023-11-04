const database = require('../database') // getPoolDB
const sendMail = require('./nodemailer.controller');
require('dotenv').config()

class UserRegistration{

    async sendHelpMail(req,res){
        const {user_name, user_mail,user_phone,user_text} = req.body;
        sendMail.sendHelpMail(
            user_name, user_mail,user_phone,user_text
        );
        
        res.json({
            user_phone,
            user_name,
            user_mail,
            user_text
        })
    }
    async testQuery(req,res){
        res.json('ок')
    }

}   

module.exports = new UserRegistration;