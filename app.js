const express = require('express')
const app = express()
const twilio=require("./twilio")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/webhook', function (req, res) {
  console.log("req ->", req.body)
  twilio.sendTextMessage(req.body.WaId,"probando botones")
    res.status(200).json({ok:true,msg:"Mensaje enviado correctamente"})
})

app.listen(5500, ()=>{
    console.log("Servidor montado en puerto 5500")
})