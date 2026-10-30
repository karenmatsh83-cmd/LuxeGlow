// LuxeGlow Beauty & Cosmetics
// Part 3 - JavaScript Functionality

document.addEventListener("DOMContentLoaded", function () {

    // 1. Dynamic product information

    const products = [
        {
            name: "Face Cream",
            category: "Skincare",
            description: "A beauty cream for everyday skincare."
        },
        {
            name: "Face Cleanser",
            category: "Skincare",
            description: "A cleanser for your daily skincare routine."
        },
        {
            name: "Lipstick",
            category: "Makeup",
            description: "Lipstick for different beauty looks."
        },
        {
            name: "Foundation",
            category: "Makeup",
            description: "Foundation for your makeup routine."
        },
        {
            name: "Makeup Brushes",
            category: "Accessories",
            description: "Brushes for applying makeup."
        },
        {
            name: "Beauty Tools",
            category: "Accessories",
            description: "Useful tools for everyday beauty care."
        }
    ];

    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("product-search");
    const sortSelect = document.getElementById("product-sort");

    function displayProducts(productItems) {

        if (!productList) return;

        productList.innerHTML = "";

        if (productItems.length === 0) {
            productList.innerHTML = "<p>No products found.</p>";
            return;
        }

        productItems.forEach(function (product) {

            const productCard = document.createElement("section");

            productCard.innerHTML = `
                <h2>${product.name}</h2>
                <p><strong>Category:</strong> ${product.category}</p>
                <p>${product.description}</p>
            `;

            productList.appendChild(productCard);
        });
    }

    displayProducts(products);

    // 2. Product search

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.toLowerCase();

            const filteredProducts = products.filter(function (product) {
                return product.name.toLowerCase().includes(searchText) ||
                       product.category.toLowerCase().includes(searchText);
            });

            displayProducts(filteredProducts);
        });
    }

    // 3. Product sorting

    if (sortSelect) {
        sortSelect.addEventListener("change", function () {

            let sortedProducts = [...products];

            if (sortSelect.value === "ascending") {
                sortedProducts.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            }

            if (sortSelect.value === "descending") {
                sortedProducts.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }

            displayProducts(sortedProducts);
        });
    }

    // 4. Accordion interactive elements

    document.querySelectorAll(".accordion-button").forEach(function (button) {

        button.addEventListener("click", function () {

            const content = button.nextElementSibling;

            if (content) {
                content.classList.toggle("show");
            }
        });
    });

    // 5. Image lightbox

    document.querySelectorAll(".gallery-image").forEach(function (image) {

        image.addEventListener("click", function () {

            const lightbox = document.createElement("div");

            lightbox.className = "lightbox";

            lightbox.innerHTML = `
                <span class="lightbox-close">&times;</span>
                <img src="${image.src}" alt="${image.alt}">
            `;

            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });

    // 6. Simple animation when sections appear

    const sections = document.querySelectorAll("main section");

    sections.forEach(function (section) {
        section.classList.add("fade-in");
    });

});
// 7. Enquiry form validation

const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

        if (!name || !email || !subject || !message) {
            formMessage.textContent = "Please complete all the fields.";
            return;
        }

        if (message.length < 10) {
            formMessage.textContent = "Your enquiry must contain at least 10 characters.";
            return;
        }

        formMessage.textContent =
            "Thank you! Your enquiry has passed validation.";

        enquiryForm.reset();
    });
}