const mango=require("mongoose")

const UserSchema=mango.Schema({
    name:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true},
    location:{type:String,required:true},
    price:{type:Number},
    ticket:{type:Number,required:true},

})

module.exports=mango.model("User",UserSchema)