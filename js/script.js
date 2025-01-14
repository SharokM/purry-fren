var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log(cat.outerHTML);

button.addEventListener("click", function () {
//     if (cat.classList.contains("show")) {
//     console.log("yes");
//   } else { console.log("no");
//   }});
       if (cat.classList.contains("show")) {
       cat.classList.remove("show");
       button.classList.add("disappear");
       } else { cat.classList.add("show");
        button.classList.remove("disappear");
       }});