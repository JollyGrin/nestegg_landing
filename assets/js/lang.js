function showNL() {
  var enElements = document.getElementsByClassName("en"),
    i;
  for (i = 0; i < enElements.length; i += 1) {
    enElements[i].style.display = "none";
  };

  var nlElements = document.getElementsByClassName("nl"),
    i;
  for (i = 0; i < nlElements.length; i += 1) {
    nlElements[i].style.display = "inherit";
  };
};

function showEN() {
  var nlElements = document.getElementsByClassName("nl"),
    i;
  for (i = 0; i < nlElements.length; i += 1) {
    nlElements[i].style.display = "none";
  };

  var enElements = document.getElementsByClassName("en"),
    i;
  for (i = 0; i < enElements.length; i += 1) {
    enElements[i].style.display = "inherit";
  };
};