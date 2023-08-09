const mongoose = require('mongoose');
var Promise = require('promise')

const Student_schema = new mongoose.Schema({
    nom : String,
    prenom : String,
    numeros : Number
});



const Student = mongoose.model('Student',Student_schema);

module.exports.Student=Student;


// exports.testconnc=()=>{
//     return  new Promise ((resolve,reject)=>{
//        mongoose.connect('mongodb:/0.0.0.0:27017/university',{ useNewUrlParser: true,  useUnifiedTopology: true }).then(()=>{
//            mongoose.disconnect() 
//            resolve('Mongo is UP.')

//        }).catch((err)=>reject(err))
//        })
//  }
exports.postnewstudent=()=>{
    return  new Promise ((resolve,reject)=>{
       mongoose.connect('mongodb:/0.0.0.0:27017/university',{ useNewUrlParser: true,  useUnifiedTopology: true }).then(()=>{
           mongoose.disconnect() 
           resolve('Mongo is UP.')

       }).catch((err)=>reject(err))
       })
 }