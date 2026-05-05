
const container = document.getElementById("serviceDetails");

// 🔐 حماية الصفحة
const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  window.location.href = "login.html";
}

// 📦 جلب الخدمة
const serviceId = localStorage.getItem("serviceId");

const service = services.find(s => s.id == Number(serviceId));


// 🎯 عرض التفاصيل
function renderService() {

  if (!service) {
    container.innerHTML = `
      <div class="error">
        <h2>الخدمة غير موجودة ❌</h2>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="details-card">

      <img src="${service.image}" class="details-img">

      <div class="details-content">

        <h2>${service.name}</h2>

        <p class="short">
          ${service.description}
        </p>

        <p class="long">
          هذه الخدمة يتم تنفيذها داخل مركز تجميل احترافي يعتمد على أحدث التقنيات الحديثة في العناية بالبشرة والجمال.  
          الهدف منها هو تحسين مظهر البشرة، إزالة الشوائب، ومنحك إحساس فاخر يشبه صالونات التجميل العالمية.
        </p>

        <div class="price">
          ${service.price}$ 💎
        </div>

        <div class="actions">
          <button class="btn" onclick="bookService()">احجز الآن</button>
          <button class="btn outline" onclick="addReview()">إضافة تقييم</button>
        </div>

      </div>

    </div>
  `;
}


// 📅 حجز
function bookService() {

  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  bookings.push({
    id: Date.now(),
    service: service.name,
    user: user.name
  });

  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("تم الحجز بنجاح ✔");
}


// ⭐ تقييم
function addReview() {

  let review = prompt("اكتب تقييمك:");

  if (!review) return;

  let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.push({
    service: service.name,
    text: review,
    user: user.name
  });

  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert("تم إضافة التقييم ✔");
}


// 🚀 تشغيل
renderService();