var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("My Mom likes yellow flowers.");
    break;
  default:
    console.log("I don't think " + color + " is a primary color!");
}