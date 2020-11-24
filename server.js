//Cretaion of the server
const express = require('express');
//requiring the router set in articles.js
const articleRouter = require('./routes/articles')



//calling express as a function 
const app = express()

//Now seeting the view engine to ejs
app.set('view engine','ejs')    


//telling the app to now use the router created
app.use('/articles',articleRouter)

//creation of routes here
app.get('/',(req,res)=>{

    const articles = [{
        title:'test articles',
        createdAt: new Date(),
        description: 'test description'

    },
    {
        title:'test articles2',
        createdAt: new Date(),
        description: 'test description2'

    }]
    res.render('index',{articles: articles})

})


app.listen(1337)