document.querySelectorAll(".dropdown").forEach((function(t){var e=t.querySelector(".dropdown__button"),i=t.querySelector(".dropdown__list"),o=i.querySelectorAll(".dropdown__list-item"),n=t.querySelector(".dropdown__input_hidden");e.addEventListener("click",(function(){i.classList.toggle("dropdown__list_visible"),this.classList.toggle("dropdown__button_active")})),o.forEach((function(t){t.addEventListener("click",(function(t){o.forEach((function(t){t.classList.remove("dropdown__list-item_active")})),t.target.classList.add("dropdown__list-item_active"),e.innerText=this.innerText,n.value=this.dataset.value,i.classList.remove("dropdown__list_visible")}))})),document.addEventListener("click",(function(t){t.target!==e&&(e.classList.remove("dropdown__button_active"),i.classList.remove("dropdown__list_visible"))})),document.addEventListener("keydown",(function(t){"Tab"!==t.key&&"Escape"!==t.key||(e.classList.remove("dropdown__button_active"),i.classList.remove("dropdown__list_visible"))}))})),document.querySelectorAll(".dropdown_with-chk").forEach((function(t){var e=t.querySelector(".dropdown_with-chk__button"),i=t.querySelector(".dropdown_with-chk__list"),o=i.querySelectorAll(".dropdown_with-chk__list-item");e.addEventListener("click",(function(){i.classList.toggle("dropdown_with-chk__list_visible"),this.classList.toggle("dropdown_with-chk__button_active")})),o.forEach((function(t){t.addEventListener("click",(function(t){t.target.classList.toggle("dropdown_with-chk__list-item_active")}))})),document.addEventListener("click",(function(t){t.target===e||t.target===o||t.target.classList.contains("dropdown_with-chk__list-item")||t.target.classList.contains("dropdown_with-chk__list-item_label")||(e.classList.remove("dropdown_with-chk__button_active"),i.classList.remove("dropdown_with-chk__list_visible"))})),document.addEventListener("keydown",(function(t){"Tab"!==t.key&&"Escape"!==t.key||(e.classList.remove("dropdown_with-chk__button_active"),i.classList.remove("dropdown_with-chk__list_visible"))}))}));
//# sourceMappingURL=take-order.80405ce3.js.map
