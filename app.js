let express = require('express') //first step to connect express
let app = express() //second step to create app which is our version calling that express func 

//first enpoint -- req = request, res = response
//use method takes in two arguments -- where you want to be able to call and what you want back
app.use('/test', (req, res) => {
    res.send('This is a server message')
})


app.listen(3000, () => { //call app.listen function() requires two parameters - (port, callback)
    console.log('App is running on 3000')
})

/*
these are the same -- can use to test
    127.0.0.1:3000/test 
    localhost:3000/test
*/