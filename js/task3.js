import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
      return acc;
    } else {
      return acc;
    }
  }, []);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
