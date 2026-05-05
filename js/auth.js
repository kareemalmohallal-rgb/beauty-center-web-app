
// ===== إظهار تسجيل =====
function showRegister() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}

// ===== إظهار login =====
function showLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("registerBox").style.display = "none";
}


// ===== إنشاء حساب =====
function register() {

  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // منع التكرار
  let exist = users.find(u => u.email === email);

  if (exist) {
    document.getElementById("msg2").innerHTML = "هذا الحساب موجود ❌";
    return;
  }

  users.push({
    id: Date.now(),
    name,
    email,
    password
  });

  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("msg2").innerHTML = "تم إنشاء الحساب ✔";

  // رجوع تلقائي لتسجيل الدخول
  setTimeout(showLogin, 1000);
}


// ===== تسجيل الدخول =====
function login() {

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    document.getElementById("msg").innerHTML = "بيانات غير صحيحة ❌";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "index.html";

//   window.location.href = "dashboard.html";
}