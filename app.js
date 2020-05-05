const express = require('express')
const app =express()
app.get('',(req, res) =>{
  res.send('<h1>weather</h1>')  
})
app.get('/help',(req, res) =>{
    res.send([{
        name:'rahul',
        age: '30'
    },
    {
        name:'kuli',
        age:'23',
        city:'jalandhar'
    }
    ]
    )  
  })
  app.get('/about',(req, res) =>{
    res.send('<h1>My content</h1>')  
  })
  app.get('/weather',(req, res) =>{
    res.send(
        {
          forcast:'it is humidity in air today',
          temperature:'34 degree celcius',
          loaction:'jalandhar,punjab,india'  
        }
    )  
  })
app.listen(3000,()=>
{
console.log('server is up on port 3000')
})