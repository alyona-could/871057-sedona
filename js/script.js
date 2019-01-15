var searchOpen = document.querySelector(".form-title");
var searchForm =  document.querySelector(".register-form");

if (searchOpen) {
  if (searchForm) {
    searchForm.classList.add("register-form-hidden");
  };

  searchOpen.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("register-form-hidden");
    searchForm.classList.toggle("register-form-shown");
  });
};

