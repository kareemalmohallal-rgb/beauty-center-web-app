console.log("Ready 🔥");
window.onload = function () {
  const user = localStorage.getItem("currentUser");

  if (!user) {
    window.location.href = "login.html";
  }
};
const user = localStorage.getItem("currentUser");

if (!user) {
  window.location.href = "login.html";
}