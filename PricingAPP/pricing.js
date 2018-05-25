

var vcpuDropdown = document.querySelectorAll(".vcpuDropdown");
var vcpuButton = document.querySelector("#vcpuButton");
var ramButton = document.querySelector("#ramButton");
var ramDropdown = document.querySelectorAll(".ramDropdown");
var ssdButton = document.querySelector("#ssdButton");
var ssdDropdown = document.querySelectorAll(".ssdDropdown");


var calculateButton = document.querySelector("#calculateButton");
var finalPrice = document.querySelector("#finalPrice");


// VCPU
for(let i = 0; i < vcpuDropdown.length; i++) {
  vcpuDropdown[i].addEventListener("click", function() {
    var clickedValue = vcpuDropdown[i].textContent
    vcpuButton.textContent = clickedValue;
  });
}

// RAM
for(let i = 0; i < ramDropdown.length; i++) {
  ramDropdown[i].addEventListener("click", function() {
    var clickedValue = ramDropdown[i].textContent
    ramButton.textContent = clickedValue;
  });
}

// SSD
for(let i = 0; i < ssdDropdown.length; i++) {
  ssdDropdown[i].addEventListener("click", function() {
    var clickedValue = ssdDropdown[i].textContent
    ssdButton.textContent = clickedValue;
  });
}


calculateButton.addEventListener("click", function() {
  calculate();
})

function calculate() {
  var x = Number(vcpuButton.textContent);
  var y = Number(ramButton.textContent);
  var z = Number(ssdButton.textContent);

  var vcpuPrice = 2.36 * (1.0277 ** x);
  var ramPrice = 1.17435 * (0.9991 ** y);
  var ssdPrice = 0.04769 * (1.0008 ** z);

  var vcpuCost = vcpuPrice * x
  var ramCost = ramPrice * y
  var ssdCost = ssdPrice * z

  var totalPrice = vcpuCost + ramCost + ssdCost

  if(x == 2 && y == 8 && z == 100) {
    totalPrice += 1;
  }
  else if(x == 4 && y == 12 && z == 200) {
    totalPrice += 4;
  }
  else if(x == 6 && y == 24 && z == 400) {
    totalPrice += 4;
  }
  else {
    totalPrice = vcpuCost + ramCost + ssdCost;
  }

  finalPrice.textContent = "Total Price: " + "$" + Math.round(totalPrice);

}
