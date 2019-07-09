const whitelist = ["name", "age", "food", "kids"];

export function transformData(arr) {
  return arr.reduce((obj, {key, value}) => {
    if (whitelist.includes(key)) obj[key] = value;
    return obj;
  }, {});
}
