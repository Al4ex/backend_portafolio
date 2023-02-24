import mongoose from 'mongoose';
;

const connectDB = async () =>{
  try {
      mongoose.set('strictQuery', false)
      mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology: true});
      console.log('DB CONECTED');
    } catch (error) {
      handleError(error);
    }
}


export default connectDB