const loadCSV = require('../load-csv');
let { features, labels, testFeatures, testLabels } = loadCSV('../data/cars.csv', {
   shuffle: true,
   splitTest: 100,
   dataColumns: ['horsepower', 'weight', 'displacement'],
   labelColumns: ['mpg']
 });

 console.log(features);