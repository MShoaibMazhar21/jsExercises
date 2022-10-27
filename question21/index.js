const arr = [];
const createCitiesList = (data) => {
  return arr.push({ cityName: data });
};

createCitiesList("Islamabad");
createCitiesList("Jhelum");
createCitiesList("Lahore");
createCitiesList("Kasur");
console.log(arr);
