function knn(data, point, k) {
  return _.chain(data)
    .map(row => {
      return [
        distance(row[0], point), 
        _.last(row)
      ];
    })
    .sortBy(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy(row => row[1])
    .last()
    .first()
    .parseInt()
    .value();
}

function distance(a, b) {
  return Math.abs(a-b);
} 

//module.exports = knn;