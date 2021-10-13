let main = document.querySelector("#infinite-list");

// Add 20 items.
let next = 1;
let load = function () {
  for (let i = 0; i < 25; i++) {
    let h3 = document.createElement("h3");
    h3.innerText = "Masai Student " + next++;
    main.appendChild(h3);
  }
};

// Detect when scrolled to bottom.
main.addEventListener("scroll", function () {
  if (main.scrollTop + main.clientHeight >= main.scrollHeight) {
    load();
  }
});

// Initially load some items.
load();
