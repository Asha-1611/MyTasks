const express= require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname))
app.use(bodyParser.json());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"asha1606",
    database:"task1_db"
});
db.connect((err)=>{
    if(err){
        console.log("DataBase connection failed");
        console.log(err);
    }else{
        console.log("DataBase connected");
    }
});
app.post("/register",(req,res)=>{
    const{name,email,date,department,phoneno,gender}= req.body;
    if(!name||!email||!date||!department||!phoneno||!gender){
        return res.json({message:"All fields are required"});
    }
    const sql = "INSERT INTO users(name,email,date,department,phoneno,gender) VALUES (?,?,?,?,?,?)";
    db.query(sql,[name,email,date,department,phoneno,gender],(err,result) => {
        if(err){
            console.log("MYSQL ERROR:", err);
            return res.json({message:"Error inserting date"});
        }
        res.json({message:"Data inserted successfully"});

    });
});
app.listen(3000,()=>{
    console.log("server started in port 3000");
});
