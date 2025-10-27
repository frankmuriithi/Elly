// Replace this with your Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPlcWya5v4cyJIXGOZGUcbsCc417yFSVG9RNVVWzBkuxLh0M8gxygwQiBQmR9xvHdr/exec';

        // Sample collection data with additional details
        const collectionItems = [
            {
                id: 1,
                title: "AFI custom",
                category: "all",
                image: "images/shoe1.jpg",
                description: "Classic AFI custom shoe for work, events, or everyday wear.",
                price: "Ksh 3,700",
                features: [
                    "Comfortable fit",
                    "Timeless design",
                    "Size 39-45 available",
                    
                ]
            },
            {
                id: 2,
                title: "NB 1906",
                category: "all",
                image: "images/shoe2.jpg",
                description: "Classic NB 1906 shoes, brings sophistication and confidence to every step.",
                price: "ksh 4,000",
                features: [
                    "Easy to clean",
                    "Non-slip sole",
                    "Size 38-45 available",
                ]
            },
            {
                id: 3,
                title: "Jordan 4Nike SB",
                category: "all",
                image: "images/shoe3.jpg",
                description: "Premium Jordan 4Nike SB sneakers for ultimate style and performance.",
                price: "ksh 3,800",
                features: [
                    "Available in multiple colors",
                    "Breathable interior",
                    "Size 38-45 available",
                ]
            },
            // ... (rest of your collection items remain the same)
        ];

        // DOM Elements
        const header = document.getElementById('header');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const collectionGrid = document.querySelector('.collection-grid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const loader = document.getElementById('loader');
        const backToTop = document.getElementById('backToTop');
        const productPopup = document.getElementById('productPopup');
        const popupClose = document.getElementById('popupClose');
        const closePopupBtn = document.getElementById('closePopupBtn');
        const inquireBtn = document.getElementById('inquireBtn');
        const popupImage = document.getElementById('popupImage');
        const popupTitle = document.getElementById('popupTitle');
        const popupPrice = document.getElementById('popupPrice');
        const popupDescription = document.getElementById('popupDescription');
        const popupFeatures = document.getElementById('popupFeatures');
        
        // Form elements
        const contactForm = document.getElementById('contactForm');
        const newsletterForm = document.getElementById('newsletterForm');
        const contactNotification = document.getElementById('contactNotification');
        const newsletterNotification = document.getElementById('newsletterNotification');
        const contactSubmitBtn = document.getElementById('contactSubmitBtn');
        const newsletterSubmitBtn = document.getElementById('newsletterSubmitBtn');

        // Function to show notification
        function showNotification(element, message, type) {
            element.textContent = message;
            element.className = 'form-notification';
            element.classList.add(`form-${type}`);
            element.style.display = 'block';
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    element.style.display = 'none';
                }, 5000);
            }
        }

        // Function to submit form data to Google Sheets
        async function submitToGoogleSheets(data, type) {
            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                    },
                    body: JSON.stringify({...data, type: type})
                });
                
                const result = await response.json();
                return result;
            } catch (error) {
                console.error('Error submitting form:', error);
                return {result: 'error', message: 'Network error. Please try again.'};
            }
        }

        // Contact form submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show loading state
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            showNotification(contactNotification, 'Sending your message...', 'loading');
            
            try {
                const result = await submitToGoogleSheets(formData, 'contact');
                
                if (result.result === 'success') {
                    showNotification(contactNotification, 'Thank you! Your message has been sent successfully.', 'success');
                    contactForm.reset();
                } else {
                    showNotification(contactNotification, `Error: ${result.message}`, 'error');
                }
            } catch (error) {
                showNotification(contactNotification, 'An error occurred. Please try again.', 'error');
            } finally {
                // Reset button state
                contactSubmitBtn.disabled = false;
                contactSubmitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            }
        });

        // Newsletter form submission
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('newsletterEmail').value;
            const formData = { email };
            
            // Show loading state
            newsletterSubmitBtn.disabled = true;
            newsletterSubmitBtn.innerHTML = 'Subscribing...';
            showNotification(newsletterNotification, 'Subscribing...', 'loading');
            
            try {
                const result = await submitToGoogleSheets(formData, 'newsletter');
                
                if (result.result === 'success') {
                    showNotification(newsletterNotification, 'Thank you for subscribing to our newsletter!', 'success');
                    newsletterForm.reset();
                } else {
                    showNotification(newsletterNotification, `success: ${result.message}`, 'success');
                }
            } catch (error) {
                showNotification(newsletterNotification, 'Thank you for subscribing to our newsletter!', 'success');
            } finally {
                // Reset button state
                newsletterSubmitBtn.disabled = false;
                newsletterSubmitBtn.innerHTML = 'Subscribe';
            }
        });

        // ... (rest of your existing JavaScript remains the same)
        // Loading screen, header scroll, mobile menu, collection rendering, etc.

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderCollectionItems();
        });
        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 1500);
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Back to top button
            if (window.scrollY > 500) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Render collection items
        // In your renderCollectionItems function, update the description rendering:

        // In your renderCollectionItems function:
        function renderCollectionItems(filter = 'all') {
            collectionGrid.innerHTML = '';
            
            const filteredItems = filter === 'all' 
                ? collectionItems 
                : collectionItems.filter(item => item.category === filter);
            
            filteredItems.forEach(item => {
                const collectionItem = document.createElement('div');
                collectionItem.className = 'collection-item';
                collectionItem.setAttribute('data-category', item.category);
                
                // Ultra short description for mobile
                const shortDescription = item.description.substring(0, 60) + '...';
                
                collectionItem.innerHTML = `
                    <div class="collection-img-container">
                        <img src="${item.image}" alt="${item.title}" class="collection-img">
                        <div class="collection-overlay">
                            <button class="btn view-details-btn" data-id="${item.id}">Details <i class="fas fa-eye"></i></button>
                        </div>
                    </div>
                    <div class="collection-info">
                        <h3>${item.title}</h3>
                        <p class="collection-description">${shortDescription}</p>
                        <div class="collection-price">${item.price}</div>
                    </div>
                `;
                
                collectionGrid.appendChild(collectionItem);
            });
            
            
            // Add event listeners to view details buttons
            document.querySelectorAll('.view-details-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const itemId = parseInt(btn.getAttribute('data-id'));
                    openProductPopup(itemId);
                });
            });
            
            // Animate items on scroll
            animateOnScroll();
        }

        // Open product popup
        function openProductPopup(itemId) {
            const item = collectionItems.find(i => i.id === itemId);
            if (!item) return;
            
            // Set popup content
            popupImage.style.backgroundImage = `url('${item.image}')`;
            popupTitle.textContent = item.title;
            popupPrice.textContent = item.price;
            popupDescription.textContent = item.description;
            
            // Clear and set features
            popupFeatures.innerHTML = '';
            item.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                popupFeatures.appendChild(li);
            });
            
            // Show popup
            productPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close product popup
        function closeProductPopup() {
            productPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Event listeners for popup
        popupClose.addEventListener('click', closeProductPopup);
        closePopupBtn.addEventListener('click', closeProductPopup);
        
        // Close popup when clicking outside content
        productPopup.addEventListener('click', (e) => {
            if (e.target === productPopup) {
                closeProductPopup();
            }
        });

        // Inquire button - scroll to contact form
        inquireBtn.addEventListener('click', () => {
            closeProductPopup();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Filter collection items
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Filter items
                renderCollectionItems(btn.getAttribute('data-filter'));
            });
        });

        // Animate elements on scroll
        function animateOnScroll() {
            const items = document.querySelectorAll('.collection-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            items.forEach(item => {
                observer.observe(item);
            });
        }

        // Animate stats counter
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 16);
            });
        }

        // Stats counter on scroll
        const statsSection = document.querySelector('.stats');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Form submission (frontend only - no backend functionality)
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! This is a frontend-only demonstration, so your message has not been sent to a server.');
            e.target.reset();
        });

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            e.target.reset();
        });

        // Back to top functionality
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderCollectionItems();
        });
