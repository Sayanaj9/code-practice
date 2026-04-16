const {pool}=require("pg")
require("dotenv").config()

const pool=new pool({
    connectionString:process.env.DATABASE_URL,
})
pool.query("SELECT NOW()")
module.exports=pool;