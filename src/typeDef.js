import { gql } from "apollo-server-express";

const typeDefs = gql`
type Email {
    id:ID, name: String, email: String, message: String
}
  type Query {
    hello: String,
    getAllEmails: [Email]
  }

  type Mutation {
    sendEmail(name: String!, email: String!, message: String!): Email
  }
`;

export default typeDefs