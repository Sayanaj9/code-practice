require("dotenv").config()

const  express=require("express")
const cors=require("cors")
const port=process.env.PORT || 5000
const app= express()
const pool=require("./db")
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
/
//get categories
app.get("/api/categories",async (req,res)=>{
   const categories= await pool.query("SELECT * FROM categories")
   res.json(categories.rows)
})
//get all questions
app.get("/api/questions",async (req,res)=>{
   const questions= await pool.query("SELECT * FROM questions")
   res.json(questions.rows)
})
//get questions by category
// app.get("/api/categories/:id/questions",async (req,res)=>{
//     const {id}=req.params;
//    const categories= await pool.query(`SELECT * FROM questions WHERE category_id=${id}`)
//    res.json(categories.rows)
// })
