
const express=require('express');
const app=express();
app.use(express.json());
app.get('/',(req,res)=>res.send('ERP API running'));
app.listen(4000,()=>console.log('API running on 4000'));

//git deploy 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
