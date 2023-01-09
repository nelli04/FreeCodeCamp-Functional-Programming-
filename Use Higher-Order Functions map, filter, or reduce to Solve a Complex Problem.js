const squareList = arr => {
    // Only change code below this line
    return arr.reduce((square, num) => {
      return Number.isInteger(num) && num > 0
      ? square.concat(num * num)
      : square;
    }, []);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);