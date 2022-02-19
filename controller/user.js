import user from "../model/user.js";

export const creatUser = (req, res, next) => {
  const userInfo = {
    name: "ahmed",
    email: "ahmed@gmail.com",
    age: 23,
    password: "12345678",
  };
  const user = new user(userInfo);
  user
    .save()
    .then(() => {
      console.log("user created sucsess");
    })
    .catch(() => {
      console.log("Somthing went wrong");
    });
};
