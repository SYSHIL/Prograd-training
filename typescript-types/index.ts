export {};

// define a common type for properties shared between User and Admin
type Common = {
  name: string;
  age: number;
};

// define User type with properties userName and Common properties
type User = {
  userName: string;
} & Common;

// define Admin type with properties password and Common properties
type Admin = {
  password: string;
} & Common;

function main() {
  // create an Admin instance
  const dinesh: Admin = {
    name: "dinesh",
    age: 40,
    password: "bxnzs",
  };

  // create User instances
  const ilhan: User = {
    name: "ilhan",
    age: 19,
    userName: "syshil",
  };

  const surya: User = {
    name: "surya",
    age: 21,
    userName: "sya@21",
  };

  // create an array that can hold both Admin and User types
  let peopleArray: (Admin | User)[] = [];

  // push the instances into the array
  peopleArray.push(dinesh);
  peopleArray.push(ilhan);
  peopleArray.push(surya)

  // segregate the objects in the people array
  let users: User[] = [];
  let admins: Admin[] = [];

  // define a type guard function to check if data is an Admin
  const isAdmin = (data: User | Admin): data is Admin => {
    return (data as Admin).password !== undefined;
  };

  // loop through the peopleArray and segregate Users and Admins
  for (let i = 0; i < peopleArray.length; i++) {
    let data = peopleArray[i];
    // conduct type narrowing
    if (isAdmin(data)) {
      admins.push(data);
    } else {
      users.push(data);
    }
  }

  // Log the arrays of Users and Admins
  console.log("Users:");
  console.log(users);
  console.log("\nAdmins:");
  console.log(admins);
}
//
main();
