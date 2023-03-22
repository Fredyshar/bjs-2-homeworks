function compareArrays(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    let res = (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]));
    return res;
  }
}

function getUsersNamesInAgeRange(users, gender) {
  if (Array.isArray(users)) {
    let filterList = users.filter(user => user.gender === gender);
    if (filterList.length !== 0) {
      let avgAge = (filterList.reduce((acc, item) => acc + item.age, 0)) / filterList.length;
      return avgAge;
      } else {
        return 0;
        }
  }
}