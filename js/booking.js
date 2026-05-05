
// 🔐 حماية الصفحة
const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}


// 🚀 الحجز
function book() {

  const serviceName = document.getElementById("serviceName").value;
  const userName = document.getElementById("userName").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value;
  const msg = document.getElementById("msg");

  // التحقق
  if (!serviceName || !userName || !date || !time) {
    msg.innerHTML = "❌ يرجى تعبئة جميع البيانات الأساسية";
    msg.style.color = "red";
    return;
  }

  // جلب الحجوزات
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // إضافة حجز جديد
  const newBooking = {
    id: Date.now(),
    service: serviceName,
    user: userName,
    date: date,
    time: time,
    notes: notes || "لا يوجد",
    createdBy: user.email
  };

  bookings.push(newBooking);

  localStorage.setItem("bookings", JSON.stringify(bookings));

  // رسالة نجاح
  msg.innerHTML = "✔ تم الحجز بنجاح!";
  msg.style.color = "green";

  // تفريغ
  document.getElementById("serviceName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("notes").value = "";
}