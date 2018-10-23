import {Dialog} from './test' ;

var showDelete = document.querySelector(".popup.delete");
var btnDelete = document.querySelector(".delete");
var showInfo = document.querySelector(".popup.info");
var btnInfo = document.querySelector(".info");
var showNon = document.querySelector(".popup.non-closable");
var btnNon = document.querySelector(".nonclose");

    btnDelete.addEventListener("click", function () {
      new Dialog(showDelete).showPopup();
    });
    btnInfo.addEventListener("click", function () {
      new Dialog(showInfo).showPopup();
    });
    btnNon.addEventListener("click", function () {
      new Dialog(showNon).showPopup();
    });
 
