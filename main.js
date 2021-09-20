const cron = require('node-cron');
var https = require("https");

const urls = [
    "https://snipsol.herokuapp.com/",
    "https://share.streamlit.io/tuminzee/snipsol-webapp/app.py",
  ];

// const job = schedule.scheduleJob("/3 * * * * *", function () {
//   console.log("The answer to life, the universe, and everything!");
//   pingAllUrls();
// });

cron.schedule('*/3 * * * * *', () => {
    pingAllUrls();
});


function pingAllUrls() {
  for (let url of urls) {
    https.get(url, function (res) {
        if (res.statusCode == 200)
          console.log(url, " This site is up and running!");
        else console.log("This site might be down " + res.statusCode);
      });
  }
}


//    https://snipsol.herokuapp.com/
