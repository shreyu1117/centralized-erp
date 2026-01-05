
const express=require('express');
const app=express();
app.use(express.json());
app.get('/',(req,res)=>res.send('ERP API running'));
app.listen(4000,()=>console.log('API running on 4000'));
/* ✅ TEST BACKEND API (ADD THIS) */
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});
//git deploy 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
