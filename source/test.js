export class Dialog {
  constructor(popup) {
    this.showPopup = function () {
      var main = document.body;
      var overlay = document.createElement("div");
      var popups = popup;
      overlay.classList.add("overlay", "show-overlay");
      popups.classList.add("show-popup");
      overlay.appendChild(popups);
      main.appendChild(overlay);
      if (!popups.classList.contains("non-closable")) {
        generateCloseBtn(popups);
      };
    };
    var generateCloseBtn = function (popup) {
      var closeBtn = document.createElement("button");
      closeBtn.classList.add("btn-closePopup");
      var mainPopup = popup;
      closeBtn.innerHTML = "X";
      mainPopup.appendChild(closeBtn);
      var hide = document.querySelectorAll(".btn-closePopup");
      hide.forEach(el => {
        el.addEventListener("click", hidePopup);
      });
    };

    var hidePopup = function () {
      var overlay = document.querySelectorAll(".overlay");
      var popup = document.querySelectorAll(".popup");
      overlay.forEach(el => el.classList.remove("show-overlay"));
      popup.forEach(el => el.classList.remove("show-popup"));
    };
  };
};

 