
// 🔐 حماية الصفحة
const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

// 👤 عرض الاسم
document.getElementById("username").innerText = user.name;


// 📦 جلب الحجوزات
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

const container = document.getElementById("bookings");


// 🎯 عرض الحجوزات
function render() {

  container.innerHTML = "";

  if (bookings.length === 0) {
    container.innerHTML = "<p class='empty'>لا يوجد حجوزات حالياً</p>";
    return;
  }

  bookings.forEach((b, i) => {

    container.innerHTML += `
      <div class="booking-card-dash">

        <h3>💎 ${b.service || "خدمة"}</h3>

        <p>👤 ${b.user || "غير معروف"}</p>

        <p>📅 ${b.date}</p>

        <p>⏰ ${b.time}</p>

        <p class="note">📝 ${b.notes || "لا يوجد ملاحظات"}</p>

        <button onclick="deleteBooking(${i})">حذف</button>

      </div>
    `;
  });
}


// 🗑 حذف حجز
function deleteBooking(i) {
  bookings.splice(i, 1);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  render();
}


// 🚪 تسجيل خروج
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}


// تشغيل
render();