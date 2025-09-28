let distance = Number(prompt("Enter travel distance in kilometers:"));
let transportType = prompt("Enter transport type (Bus, Train, Taxi):");
let farePerKm;

switch (transportType.toLowerCase()) {
  case "bus":
    farePerKm = 3;
    break;
  case "train":
    farePerKm = 5;
    break;
  case "taxi":
    farePerKm = 10;
    break;
  default:
    alert("Invalid transport type entered.");
    farePerKm = 0;
}
let totalFare = distance * farePerKm;
if (farePerKm > 0) {
  alert("Total Fare: " + totalFare);
}