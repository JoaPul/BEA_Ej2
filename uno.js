import Restaurant from "./restaurant.js";

const readRest = async () => {
  const res = await Restaurant.find();
  console.log(res);
};

const readRestOnly = async () => {
  const res = await Restaurant.find(
    {},
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
  );
  console.log(res);
};

const readOnlyfive = async () => {
  const res = await Restaurant.find({ borough: "Bronx" }).limit(5);
  console.log(res);
}

const calif = async () => {
  const res = await Restaurant.find({ grades: { $elemMatch: { score: { $gt: 9 } } } }, { name: 1 });
  console.log(res.length);
}

const cocina = async () => {
  const res = await Restaurant.find({ cuisine: "American " }, { name: 1 }).sort('name').limit(10);
  console.log(res);
}

export { readRest, readRestOnly, readOnlyfive, calif, cocina };