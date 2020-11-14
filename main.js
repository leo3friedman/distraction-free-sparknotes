function showDistractions() {
  document.body.classList.remove("sn-hide");
}

function hideDistractions() {
  document.body.classList.add("sn-hide");
}
const defaultSettings = {
  hideDistractions: false,
};
window.onload = function () {
  chrome.storage.sync.get(defaultSettings, function (result) {
    if (result.hideDistractions === true) {
      hideDistractions();
    }
    showElement("body", "block");
  });
};
chrome.storage.onChanged.addListener(function (changes, areaName) {
  if (changes.hideDistractions !== undefined) {
    if (changes.hideDistractions.newValue === true) {
      hideDistractions();
    } else {
      showDistractions();
    }
  }
});
function showElement(elementSelector, display) {
  let selectedElement = document.querySelector(elementSelector);
  if (selectedElement) {
    selectedElement.style.visibility = "visible";
  }
}
