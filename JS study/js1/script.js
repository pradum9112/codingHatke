var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    // console.log("if...")
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    // console.log("else...")
    check = 0;
  }
});

var con = document.querySelector("#icon"); // Assuming it's a class selector
var love = document.querySelector("i");

con.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  love.style.opacity = 0.8;

  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
