// Assignment 2A
// Function to find the Diagonal 
function findDiagonal(num) {
    return Math.sqrt(162);
}

// Variable num
var num = 9;

//document.write(findDiagonal(num));
console.log(num)


// Assignment 2B

function FindArea(area) {
    return Math.sqrt(5+6+7)/2
}
var side1 = 5;
var side2 = 6;
var side3 = 7;
var perimeter = (side1 + side2 + side3) / 2;
var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));

document.write(FindArea(area));
console.log(area);

//Assignment 2C
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));


