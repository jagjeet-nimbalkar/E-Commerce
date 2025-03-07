const express=require("express")
const app=express()
const port = process.env.PORT || 8080;
const path=require("path")
const ejsMate=require("ejs-mate");
const details=require("./data");

app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs")
app.engine("ejs",ejsMate);
app.set("views",path.join(__dirname,"views"))
app.listen(port,()=>{
    console.log("server is stared")
});


app.get("/home",(req,res)=>{
    res.render("home",{details})
});
app.get("/home/item",(req,res)=>{
    res.render("details",{details})
});
app.get("/view/:id", (req, res) => {
    let { id } = req.params;
    let detail = details.find(d => d.id == id);
    if (detail) {
        res.render("explore", { details,detail });
    } else {
        res.status(404).send("Product not found.");
    }
});
