const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/university',{ useNewUrlParser: true,  useUnifiedTopology: true })
.then(()=> {console.log('Mongo is UP.')})
.catch(err => console.log('Mongo is Down , raison : ',err.message));