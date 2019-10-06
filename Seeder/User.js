import { User } from "../models/User";

const UserSeeder = async () => {
  try {
    await User.bulkCreate([
      {
        full_name: "Amaan Salheen",
        email: "asalheen1997@gmail.com",
        password: "test",
        contact: "9773113603"
      },
      {
        full_name: "Mohit Aggrawal",
        email: "mohit@gmail.com",
        password: "test12",
        contact: "9898787867"
      }
    ]);
  } catch (error) {}
};

UserSeeder();

export default UserSeeder;
