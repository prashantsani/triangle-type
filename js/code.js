function determineTriangleType(a, b, c){
  var triangleType;

  if(typeof a != 'number' || typeof b != 'number' || typeof c != 'number'){
    return "Please Enter the length of sides in digits";
  }

  if ( a === 0 || b === 0 || c === 0){
    return "Side of a traiangle cannot be zero";
  }

  if (x===y && y==z){
    triangleType = "equilateral";
  }
  else if ((x==z) || (y==z) || (x==y)){
    triangleType = "isoseles";
  }
  else {
    triangleType = "scalene";
  }

  return "The traingle with sides as " + a + ", " + b + ", " + c + "is an " + triangleType + "triangle.";

}

//test
console.log(determineTriangleType(10,10,10));
console.log(determineTriangleType(10,10,10));