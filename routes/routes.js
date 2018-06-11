var appRouter = function (app) {
var division = require('./../division.js');
var os = require('os');

app.get("/", function(req, res) {
res.status(404).send("Error 404, To use the division service browse to: {server}:{port}/division/{number1}/{number2}");
})
  
app.get("/division/:number1/:number2", function(req,res) {
    var number1 = req.params.number1;
    var number2 = req.params.number2;
    var total = division.division(number1,number2);
    res.send(JSON.stringify(total));
  });
}

module.exports = appRouter;
