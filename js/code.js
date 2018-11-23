(function(){

  function determineTriangleType(a, b, c){
    var triangleType;

    if(a.toString() === "NaN" || b.toString() === "NaN" || c.toString() === "NaN"){
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
    else if(  ((a * a) + (b * b) === (c * c)) ||
              ((a * a) + (c * c) === (b * b)) ||
              ((c * c) + (b * b) === (a * a)) ) {
      triangleType = 'Right Angled Triangle';
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