const express = require('express')
const app = express()
const cors = require("cors")
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");

app.use(cors())

app.use(express.json());


app.post('/encrypt', function(req,res)
{
  let {text,secret_key}=req.body 
  var ciphertext = CryptoJS.AES.encrypt(text, secret_key).toString();
  let encrypted = {
    "encrypted" : ciphertext
  }
  res.send(encrypted)
})

app.post('/decrypt', function(req,res)
{
  let {text,secret_key}=req.body 
  var bytes  = CryptoJS.AES.decrypt(text, secret_key);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  let decrypted = {
    "decrypted" : originalText
  }
  res.send(decrypted)
})


app.listen('8008',function (){
  console.log("connected")
})

