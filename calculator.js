const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.send('Hello, World!');
});

app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function(req, res){
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height * height);
    res.send(`Your BMI is: ${bmi}`);
});

app.listen(3000, function(){
    console.log('Server is running on port 3000.');
});
