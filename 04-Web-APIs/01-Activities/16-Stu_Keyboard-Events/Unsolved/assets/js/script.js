function keydownAction(event) {
  var key = event.key.toLowerCase();
  var allowedKeys = 'arrowup arrowdown arrowleft arrowright'.split(' ');
  if (allowedKeys.includes(key)) {
    document.querySelector("#status").textContent = "KEYDOWN Event: " + key;
  }
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keydown", keydownAction);
document.addEventListener("keyup", keyupAction);
