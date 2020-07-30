const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/node-vue-tutorial',{
    useNewUrlParser: true
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log("Error DB"))

