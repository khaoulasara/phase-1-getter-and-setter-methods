// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(value) {
      this.radius = value / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(value) {
      this.radius = value / (2 * Math.PI);
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    // Setter for area
    set area(value) {
      this.radius = Math.sqrt(value / Math.PI);
    }
  }
  const smallCircle = new Circle(5);

console.log(smallCircle.radius); // Output: 5
console.log(smallCircle.diameter); // Output: 10
console.log(smallCircle.circumference); // Output: 31.41592653589793
console.log(smallCircle.area); // Output: 78.53981633974483

smallCircle.diameter = 12;
console.log(smallCircle.radius); // Output: 6
console.log(smallCircle.diameter); // Output: 12

smallCircle.circumference = 37.7;
console.log(smallCircle.radius); // Output: 6
console.log(smallCircle.circumference); // Output: 37.7

smallCircle.area = 113.09733552923255;
console.log(smallCircle.radius); // Output: 6
console.log(smallCircle.area); // Output: 113.09733552923255
