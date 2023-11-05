const sendMail = require('./nodemailer.controller');
const users_db = require('../JSONDATE/USERS_DB')
require('dotenv').config()


let bcrypt = require('bcrypt'); // подключаем bcrypt
let salt = bcrypt.genSaltSync(10); // создаем соль
const findIndexOf = (array,current_name) =>{
    for(let i = 0; i <= array.length-1; i++){
        if(array[i].user_name == current_name){
            return i;
        }
    }
}

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
    async logIn(req,res){
        const {userlogin, userPassword} = req.body;
        const user_hash_password = bcrypt.hashSync(userPassword, salt) // шифруем пароль
        res.json({
            userlogin,
            user_hash_password
        })
    }
    
    async authentication(req,res){
        const {userlogin, userPassword} = req.body;
        if(users_db[findIndexOf(users_db,userlogin)].user_password == bcrypt.hashSync(userPassword, salt)){
            res.json(users_db[findIndexOf(users_db,userlogin)])
        }else{
            res.json('password not ')
            
        }
    }

}   

module.exports = new UserRegistration;