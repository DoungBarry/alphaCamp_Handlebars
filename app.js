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

  // res.send('原本的ＨＴＭＬ內容移轉到~~~/views/index.handlebars')


  res.render('index')

  // Render 是表示view 對bowser 渲染畫面 .  檔案來自於 index.handlebars

})




//-------------------------------  告訴 路由器 指向到 public 靜態檔案區域的位置 ------------------------


app.use(express.static('public'))



// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})