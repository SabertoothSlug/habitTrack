const express= require('express')
const app = express()
const PORT = 8000







app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    console.log(request.params.rapperName)
    response.json(rappers)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Fly you fools!`)
})