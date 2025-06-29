 const pages = document.querySelectorAll('.form-page');
    let currentPage = 0;

    function showPage(index) {
      pages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
      });
    }

    document.querySelectorAll('.next-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = Math.min(currentPage + 1, pages.length - 1);
        showPage(currentPage);
      });
    });

    document.querySelectorAll('.prev-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = Math.max(currentPage - 1, 0);
        showPage(currentPage);
      });
    });

    document.getElementById("whatsappForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const location = document.getElementById("location").value;
      const propertyType = document.getElementById("propertyType").value;
      const message = document.getElementById("message").value;

      const interests = [];
      document.querySelectorAll("input[name='interests']:checked").forEach((cb) => {
        interests.push(cb.value);
      });

      const phoneNumber = "2348012345678";
      const fullMessage = `Hello, I'm interested in your real estate offer. Here are my details:

Full Name: ${name}
Email: ${email}
Location: ${location}
Property Type: ${propertyType}
Interests: ${interests.join(", ")}
Message: ${message}

I will send my NIN or required documents shortly.`;

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
      window.open(whatsappURL, "_blank");
    });