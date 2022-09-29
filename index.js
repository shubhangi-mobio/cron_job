// Importing required libraries
const cron = require("node-cron");
const express = require("express");

app = express(); // Initializing app

// Creating a cron job which runs on every 10 second
cron.schedule("*/10 * * * * *", function() {
 console.log("running a task every 10 second");
});

app.listen(3000);


// Importing packages
const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");
  
app = express();
  

// Send Mail function using Nodemailer
function sendMail() {
    let mailTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "shubhangihingu@gmail.com",
        pass: "iossrpmwotsdsdcg",
      },
    });
      
    // Setting credentials
    let mailDetails = {
        from: "shubhangihingu@gmail.com",
        to: "priyankag.mobio@gmail.com",
        subject: "hello",
        text: "My name is shubhangi"
    };
      
      
    // Sending Email
    mailTransporter.sendMail(mailDetails, 
                    function(err, data) {
        if (err) {
            console.log("Error Occurs", err);
        } else {
            console.log("Email sent successfully");
        }
    });
}
// Calling sendEmail() function every 1 minute
cron.schedule("5* * * * * *", function() {
  console.log('---------------------');
sendMail();
});
  
  
app.listen(3000);

