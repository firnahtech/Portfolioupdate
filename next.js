document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Hamburger Navigation Engine ---
    const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks'); // <-- Double check this has a capital L!

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



        // Auto close side panel when clicking links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    

    // --- Dynamic Skills Tag Filter Component ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active style state from all toggles
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Set current target active state
            button.classList.add('active');

            const activeFilter = button.getAttribute('data-filter');

            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (activeFilter === 'all' || cardCategory === activeFilter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
// --- AJAX Form Processing Engine ---
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('portfolioForm');
    const status = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop page from refreshing or jumping away

            // Put form button into an animated tracking loading state
            submitBtn.innerText = "Transmitting Message...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.pointerEvents = "none";
            
            // Clean old statuses
            status.style.display = "none";
            status.className = "status-msg";

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.innerText = "✨ Success! Your message has been sent to Firnah Tech.";
                    status.className = "status-msg success";
                    status.style.display = "block";
                    form.reset(); // Wipe all data input fields clear
                } else {
                    throw new Error("Form submission error response");
                }
            } catch (error) {
                status.innerText = "⚠️ Oops! Something went wrong. Please check your network and try again.";
                status.className = "status-msg error";
                status.style.display = "block";
            } finally {
                // Return button state to clickable default
                submitBtn.innerText = "Send Message";
                submitBtn.style.opacity = "1";
                submitBtn.style.pointerEvents = "auto";
            }
        });
    }
});
