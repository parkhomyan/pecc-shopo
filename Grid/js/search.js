const wrapper = document.querySelector(".search-box"),
      textInput = document.querySelector(".search-txt[type='text']");

textInput.addEventListener("keyup", event => {
  wrapper.setAttribute("data-text", event.target.value);
});
