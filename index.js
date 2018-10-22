var showDelete = document.querySelector(".popup.delete");
var btnDelete = document.querySelector(".delete");
var showInfo = document.querySelector(".popup.info");
var btnInfo = document.querySelector(".info");
var showNon = document.querySelector(".popup.non-closable");
var btnNon = document.querySelector(".nonclose");
function Dialog(popup) {
  this.showPopup = function () {
    var main = document.querySelector(".wrapper");
    var overlay = document.createElement("div");
    var popups = popup;
    overlay.classList.add("overlay", "show-overlay");
    popups.classList.add("show-popup");
    overlay.appendChild(popups);
    main.appendChild(overlay);
    var hide = document.querySelectorAll(".btn-closePopup");
    hide.forEach(el => {
      el.addEventListener("click", hidePopup)
    });
  }
}
var generateCloseBtn = function (popup) {
  var closeBtn = document.createElement("button");
  closeBtn.classList.add("btn-closePopup");
  var mainPopup = popup;
  closeBtn.innerHTML = "X";
  mainPopup.appendChild(closeBtn);
}

var hidePopup = function () {
  var overlay = document.querySelectorAll(".overlay");
  var popup = document.querySelectorAll(".popup");
  overlay.forEach(el => el.classList.remove("show-overlay"));
  popup.forEach(el => el.classList.remove("show-popup"));
}


btnDelete.addEventListener("click", function () {
  generateCloseBtn(showDelete)
  new Dialog(showDelete).showPopup()
})
btnInfo.addEventListener("click", function () {
  generateCloseBtn(showInfo)
  new Dialog(showInfo).showPopup()
})
btnNon.addEventListener("click", function () {
  new Dialog(showNon).showPopup()
})