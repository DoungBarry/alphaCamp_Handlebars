// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

const expHandlebars = require('express-handlebars')


// 設定 setting template engine -express-handlebars 

app.engine('handlebars', expHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



// routes setting
app.get('/', (req, res) => {

  // res.send('')
  //將這邊的ＨＴＭＬ內榮移置到index.handlebars 
  res.render('index')

})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})