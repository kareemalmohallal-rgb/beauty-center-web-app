

const container = document.getElementById("servicesContainer");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

// حماية تسجيل الدخول
const user = localStorage.getItem("currentUser");
if (!user) {
  window.location.href = "login.html";
}


// عرض الخدمات
function displayServices(data) {
  container.innerHTML = "";

  data.forEach(s => {
    container.innerHTML += `
      <div class="card">
        <img src="${s.image}" style="width:100%; border-radius:10px;">
        <h3>${s.name}</h3>
        <p>${s.description}</p>
        <span>${s.price}$</span><br><br>

        <button class="btn" onclick="viewDetails(${s.id})">عرض</button>
      </div>
    `;
  });
}


// بحث + فلترة
function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const filter = filterSelect.value;

  const filtered = services.filter(s => {
    return (
      s.name.toLowerCase().includes(search) &&
      (filter === "all" || s.category === filter)
    );
  });

  displayServices(filtered);
}


// فتح التفاصيل
function viewDetails(id) {
  localStorage.setItem("serviceId", id);
  window.location.href = "service-details.html";
}


// تحميل أولي
displayServices(services);

searchInput.addEventListener("input", applyFilters);
filterSelect.addEventListener("change", applyFilters);