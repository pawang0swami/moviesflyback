const Data = require("../db/data");
const Users1 = require("../db/users");
require("../db/connect");
const cors = require("cors");

const express = require("express");
const app = express();

app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: "https://moviesfly.vercel.app", // 👈 your Vercel site
  credentials: true // optional if using cookies
}));

// app.use(express.urlencoded({ extended: true }));

app.post("/singup", async (req, resp) => {
  let user2 = new Users1(req.body);
  const result = await user2.save();
  resp.send(result);
  // delete result.password;
});
app.get("/data", async (req, resp) => {
  let r = await Data.find();
  resp.send(r);
});

app.post("/data", async (req, resp) => {
  let d = new Data(req.body);
  let d1 = await d.save();
  resp.send(d1);
  //  console.log(d1);
});

// app.post("/login",async(req,resp)=>{
//  const {email,password}=req.body
//   let d1 = await Users1.findOne(email,password)

//   //   //  resp.send(user)
// //    let result = await user.save();
// //   result = result.toObject();
// //  console.log(result);
// //   resp.send(result);

//  if(d1){
// resp.send(d1)
//  }
//  else{
//   resp.status(401).send({ error: "Invalid email or password" });
//  }
// })

app.post("/login", async (req, resp) => {
  const { email, password } = req.body;
  const user = await Users1.findOne({ email, password }).select("-password");
  if (user) {
    resp.send(user);
  }
});

app.get("/movie/:id", async (r, R) => {
  let a = await Data.findOne({ _id: r.params.id });
  R.send(a);
});

app.put("/edit/:id",async(r,R)=>{
  let a =await Data.updateOne({_id:r.params.id},{$set:r.body})
     R.send(a)
})


app.get("/edit/:id",async(r,R)=>{
  let a= await Data.findOne({_id:r.params.id});
  R.send(a)
})

app.delete("/delete/:id", async(r,R)=>{
let a= await Data.deleteOne({_id:r.params.id})
R.send(a)
})



app.listen(4010, () => {
  console.log("ok");
})
