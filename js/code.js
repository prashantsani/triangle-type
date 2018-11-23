(function(){

  function determineTriangleType(a, b, c){
    var triangleType;

    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number"){
      return "Please Enter the length of sides in digits";
    }

    if ( (a === 0) || (b === 0) || c === 0){
      return "Side of a triangle cannot be zero";
    }

    if ( (a === b) && (b === c) ) {
      triangleType = "equilateral";
    }
    else if ( (a === c) || (b === c) || (a === b)){
      triangleType = "isoseles";
    }
    else {
      triangleType = "scalene";
    }

    return "The traingle with sides as " + a + ", " + b + ", " + c + " is an " + triangleType + " triangle.";

  }

  document.getElementById('triangleType').addEventListener('submit', function(e){
    e.preventDefault();

    var message = determineTriangleType(
      parseInt(document.getElementById('sideA').value),
      parseInt(document.getElementById('sideB').value),
      parseInt(document.getElementById('sideC').value)
    );

    document.getElementById("triangleResult").innerHTML = message;

    // Always Return false so that page does not refresh
    return false;
  });
})();