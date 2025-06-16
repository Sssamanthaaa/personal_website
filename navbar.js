fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        function updateActiveNav() {
            const navItems = document.querySelectorAll('.nav-item');
            const currentHash = window.location.hash;

            let matched = false;

            navItems.forEach(item => {
                const link = item.querySelector('a');
                if (link) {
                    if (link.getAttribute('href') === currentHash) {
                        item.classList.add('active');
                        matched = true;
                    } else {
                        item.classList.remove('active');
                    }
                }
            });

            // If no match was found, remove 'active' from all items (safety net)
            if (!matched) {
                navItems.forEach(item => item.classList.remove('active'));
            }
        }

        updateActiveNav(); // Initial check

        window.addEventListener('hashchange', updateActiveNav); // Re-run on hash change
    })
    .catch(error => console.error('Error loading navbar:', error));
