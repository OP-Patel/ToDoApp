import express from "express"; 
import bodyParser from "body-parser";

const app = express(); 
const port = 3000; 

var all_tasks = []; 
var all_tasks1 = []; 

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.render("index.ejs");
})

app.get("/about", (req, res) =>{
    res.render("about.ejs");
})

app.get("/tomorrow", (req, res) =>{
    res.render("tomorrow.ejs");
})

app.post("/submit", (req,res) => {
    var task = req.body["tasks"];
    all_tasks.push(task); 
    res.render("index.ejs", {task_array: all_tasks});
})  

app.post("/submit/tomorrow", (req,res) => {
    var task1 = req.body["tasks"];
    all_tasks1.push(task1); 
    res.render("tomorrow.ejs", {task_array2: all_tasks1});
})  


app.listen(port, () => {
    console.log(`Server running on port ${port}`); 
})

