const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("index");
});


router.post('/sum', function(req,res){
  const num1 =Number(req.body.number1);
  const num2 =Number(req.body.number2);
  const sum = num1/num2
  if(num2 = 0){
    res.render("error", {errormessage: "cannot divide by 0"}
  } else {
   res.render("success",  {result: sum})
   console.log(req.body);
   //res.end(JSON.stringify(sum));
  }
})

router.get("/*", function(req, res) {
  err = "wrong path!";
  res.render("error", { errormessage: err });
});

module.exports = router;
