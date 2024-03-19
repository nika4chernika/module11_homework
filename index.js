const countDown = n => {
    if(n > 500) {
        return "Слишком большое число"
      } else if (n === 0) {
        return "Число не может быть нулевым"
      } else if (n < 0) {
        return "Число должно быть положительным"
      } else {
        const nums = Array.from({length: n}, function(value, index) {
          return index + 1
        })
        return nums.reverse();
      }
};
module.exports = countDown