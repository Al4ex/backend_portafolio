import EmailModel from "./models/Emails";
import nodemailer from 'nodemailer';

const resolvers = {
    Query: {
      hello: () => 'Hola mundo',
      getAllEmails: async () =>{
        const emails = await EmailModel.find()
        return emails;
      }
    },
    Mutation: {
      sendEmail: async (_, args) => {
          const { name, email, message } = args;
    
          const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASS
            }
          });
    
          const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: name,
            text: `${message}`
          };
  
          const newEmail = new EmailModel({ name, email, message })
          await newEmail.save()
          console.log(mailOptions);
          await transporter.sendMail(mailOptions);
          return newEmail;
        }
    }
  };

  export default resolvers