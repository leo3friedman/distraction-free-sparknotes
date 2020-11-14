let hideDistractions = false;
let alterDistractionsButton = document.getElementById(
  "alterDistractionsSparkNotes"
);
function doToggle(hideDistractions) {
  if (hideDistractions) {
    alterDistractionsButton.className = "toggle toggle-on";
  } else {
    alterDistractionsButton.className = "toggle toggle-off";
  }
}
function handleClick(event) {
  chrome.storage.sync.get({ hideDistractions: false }, function (result) {
    let hideDistractions = result.hideDistractions;
    hideDistractions = !hideDistractions;
    chrome.storage.sync.set({ hideDistractions: hideDistractions });
    doToggle(hideDistractions);
  });
}

alterDistractionsButton.onclick = handleClick;
window.onload = function () {
  chrome.storage.sync.get({ hideDistractions: false }, function (result) {
    if (result.hideDistractions) {
      alterDistractionsButton.className = "toggle toggle-on";
    } else {
      alterDistractionsButton.className = "toggle toggle-off";
    }
  });
};
