import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mary Python",
    email: "mary@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jesse Script",
    email: "jesse@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
