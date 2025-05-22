const userTypeDef = `#graphql
type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String
}

type Query {
    users: [User!]    # fixed: Users → User
    authUser: User
    user(userId: ID!): User
}

type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User    # fixed: longin → login
    logout: LogoutResponse
}

input LoginInput {
    username: String!
    password: String!
}

input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String
}

type LogoutResponse {
    message: String!
}
`;

export default userTypeDef;
