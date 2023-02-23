import mongoose from 'mongoose';
const emailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
  });
 const EmailModel = mongoose.model('Emails', emailSchema);

 export default EmailModel