// Multi-page form navigation
const pages = document.querySelectorAll(".form-page");
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
}

document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });
});

document.querySelectorAll(".prev-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });
});

// Form submit → WhatsApp message
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Gather all inputs
  const inputs = document.querySelectorAll("input, select, textarea");
  const formData = {};

  inputs.forEach(input => {
    if (input.type === "checkbox") {
      if (input.checked) {
        if (!formData[input.name]) {
          formData[input.name] = [];
        }
        formData[input.name].push(input.value);
      }
    } else {
      const key = input.labels?.[0]?.innerText || input.name || input.id;
      formData[key] = input.value;
    }
  });

  // Build WhatsApp message
  let message = "*New Real Estate Loan Application*\n\n";
  for (let key in formData) {
    const value = Array.isArray(formData[key]) ? formData[key].join(", ") : formData[key];
    message += `*${key}:* ${value}\n`;
  }

  const encodedMessage = encodeURIComponent(message);

  // Replace with your business WhatsApp number (without +)
  const phoneNumber = "2347060612038";

  // Open WhatsApp chat
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
});
