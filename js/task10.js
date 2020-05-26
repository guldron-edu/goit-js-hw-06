import users from './users.js';

const getSortedUniqueSkills = users => {
  return users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .reduce((acc, user) => {
      if (!acc.includes(user)) {
        acc.push(user);
      }
      return acc;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
