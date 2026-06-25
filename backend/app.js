const express = require("express");
const cors = require("cors");


const app = express();


// allow frontend connection
app.use(cors());


// read JSON data
app.use(express.json());



// test API
app.get("/", (req,res)=>{

    res.send("Bot Battle Backend Running");

});




// CAPTCHA verification API

app.post("/verify",(req,res)=>{


    const {score,time} = req.body;



    console.log("Game Data:");
    console.log("Score:",score);
    console.log("Time:",time);



    if(score >= 8 && time > 0){


        res.json({

            verified:true,

            message:"✅ Human Verified"

        });


    }

    else{


        res.json({

            verified:false,

            message:"❌ Bot Detected"

        });


    }


});





app.listen(5000,()=>{

    console.log("Bot Battle Backend running on port 5000");

});