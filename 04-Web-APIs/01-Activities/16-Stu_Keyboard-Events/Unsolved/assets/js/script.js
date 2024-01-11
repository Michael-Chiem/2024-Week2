function keydownAction(event) {
  // TODO: Complete keydown function
  var key = event.key.toLowerCase();
  var allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
  var arrowKeys = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright'];
  if (allowedCharacters.includes(key) || arrowKeys.includes(key)) {
document.querySelector("#status").textContent = "KEYDOWN Event: " + key;
}
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
