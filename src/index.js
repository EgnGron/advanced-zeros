module.exports = function getZerosCount(number, base) {
  // TODO: need factorize BASE, solve the problem for each of its prime divisors, and then choose a minimum of answers.
  function getPrimes(number) {
    var result = {}
    for (let index = 2; index <= base; index++) {
       if ((base % index) == 0) {
         var exponent = 0
         while ((base % index) == 0) {
           base = base/index
           exponent ++
         }
         result[index] = exponent
       }
    }
    return result
  }

  function getZeroFactorial(number, step) {
    var value = number
    var result = 0
    while (value > 0) {
      value = (value/step)>> 0.5
      result += value
    }
    return result
  }

  function getMinValueOfArray(array) {
    return Math.min.apply(null, array);
  }

  var returnValue = 0

  if (base >= 2 && base <= 256) {
    var array = []
    var value = getPrimes(base)
    for (const step in value) {
      if (value.hasOwnProperty(step)) {
        const exponent = value[step];
        const count = getZeroFactorial(number, step)
        const data = (count/exponent) >> 0.5
        array.push(data)
      }
    }
    returnValue  = getMinValueOfArray(array)
  }
  return returnValue
}
