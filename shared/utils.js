exports.displayDateTime = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let dateMonthYear = date + '.' + month + '.' + year;
  let time = hours + ':' + minutes;
  let fullTime = dateMonthYear + ' ' + time;
  return fullTime;
};

exports.isEmpty = value => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (value.construtor === Array && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
};
exports.solveQuadratic = (a = 1, b = 0, c = 0) => {
  if (a === 0) {
    return 'Not a quadratic equation';
  }
  const determinate = b ** 2 - 4 * a * c;
  const solnSet = new Set();

  let root1, root2;
  if (determinate === 0) {
    root1 = -b / (2 * a);
    solnSet.add(root1);
  } else if (determinate > 0) {
    root1 = ((-b + Math.sqrt(determinate)) / 2) * a;
    root2 = ((-b - Math.sqrt(determinate)) / 2) * a;
    solnSet.add(root1);
    solnSet.add(root2);
  } else {
  }
  return solnSet;
};
// module.exports = {
//   displayDateTime: displayDateTime,
//   isEmpty: isEmpty,
//   solveQuadratic: solveQuadratic
// };
